
const Watchlist = require('../models').WatchlistMovie
const Library = require('../models').LibraryMovie

module.exports = {
  async addMovieToUser (MovieId, UserId) {
    try {
      const movie = { MovieId: MovieId, UserId: UserId }

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

  async getAllMoviesForUser (UserId, options) {
    try {
      const dbWatchlistMovie = await Watchlist.findAll({
        where: { UserId: UserId },
        include: ['Movie'],
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

  async removeMovieFromUser (MovieId, UserId) {
    try {
      const dbWatchlistMovie = await Watchlist.findOne({
        where: { MovieId: MovieId, UserId: UserId }
      })
      if (dbWatchlistMovie) {
        await dbWatchlistMovie.destroy()
        return true
      }
      return false
    } catch (err) {
      console.error(err)
    }
  }
}
