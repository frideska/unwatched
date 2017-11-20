
const Library = require('../models').LibraryMovie
const Watchlist = require('../models').WatchlistMovie

module.exports = {
  async addMovieToUser (MovieId, UserId) {
    try {
      const movie = { MovieId: MovieId, UserId: UserId }

      const dbLibraryMovie = await Library.findOne({
        where: movie
      })
      const dbWatchlistMovie = await Watchlist.findOne({
        where: movie
      })
      if (!dbLibraryMovie) {
        await Library.create(movie)
        if (dbWatchlistMovie) {
          await dbWatchlistMovie.destroy()
        }
        return true
      }
      return false
    } catch (err) {
      console.error(err)
    }
  },

  async getAllMoviesForUser (UserId, options) {
    try {
      const dbLibraryMovie = await Library.findAll({
        where: { UserId: UserId },
        include: ['Movie'],
        limit: options.size,
        offset: ((options.page - 1) * options.size)
      })
      if (dbLibraryMovie) {
        console.log(dbLibraryMovie)
        return dbLibraryMovie.map((movie) => movie.Movie)
      } else {
        return []
      }
    } catch (err) {
      console.error(err)
    }
  }
}
