//const UserMovie = require('../models/Library/LibraryUserMovie')
//const WatchlistUserMovie = require('../models/Watchlist/WatchlistUserMovie')
//const WatchlistUserTv = require('../models/Watchlist/WatchlistUserTv')
//const UserTv = require('../models/Library/LibraryUserTv')
//const tmdbWrapper = require('../../tmdb/')

const Library = require('../models').Library
const Watchlist = require('../models').Watchlist

module.exports = {
  async addMovieToUser (MovieId, UserId) {
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
  }
}
