
const Watchlist = require('../models').WatchlistMovie
const Library = require('../models').LibraryMovie

const Op = require('../models').Sequelize.Op

module.exports = {
  async addMovieToUser(MovieId, UserId) {
    try {
      const movie = {MovieId: MovieId, UserId: UserId}

      const dbWatchlistMovie = await Watchlist.findOne({
        where: movie
      })
      const dbLibraryMovie = await Library.findOne({
        where: movie
      })
      if (!dbLibraryMovie && !dbWatchlistMovie) {
        await Watchlist.create(movie)
        return true
      }
      return false
    } catch (err) {
      console.error(err)
    }
  },

  async getPageCount(UserId) {
    try {
      const movies = await Watchlist.findAll({ where: {UserId: UserId}})
      return movies.length
    } catch (err) {
      console.error(err)
      return -1
    }
  },

  async getAllMoviesForUser(UserId, options) {
    try {
      const dbWatchlistMovie = await Watchlist.findAll({
        where: {UserId: UserId},
        include: [{
          association: 'Movie',
          where: {title: {[Op.iLike]: `%${options.query}%`}}
        }],
        order: [
          ['Movie', options.orderBy, options.order]
        ],
        limit: options.size,
        offset: ((options.page - 1) * options.size)
      })
      if (dbWatchlistMovie) {
        return dbWatchlistMovie.map((movie) => movie.Movie)
      } else {
        return []
      }
    } catch (err) {
      console.error(err)
    }
  },

  async removeMovieFromUser(MovieId, UserId) {
    try {
      const dbWatchlistMovie = await Watchlist.findOne({
        where: {MovieId: MovieId, UserId: UserId}
      })
      if (dbWatchlistMovie) {
        await dbWatchlistMovie.destroy()
        return true
      }
      return false
    } catch (err) {
      console.error(err)
    }
  },

  async movieInWatchlist(MovieId, UserId) {
    try {
      const movie = await Watchlist.findOne({
        where: {MovieId: MovieId, UserId: UserId}
      })
      if (movie) {
        return true
      }
      return false
    } catch (err) {
      console.error(err)
    }
  }
}
