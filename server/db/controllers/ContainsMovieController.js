const LibraryMovie = require('../models/Library/LibraryUserMovie')
const WatchlistMovie = require('../models/Watchlist/WatchlistUserMovie')

/**
 * Checks if a give tv-show is in library for a given user
 * @param movieID
 * @param user
 * @returns {Promise.<boolean>}
 */
const movieInLibrary = async (movieID, user) => {
  let movie =  await LibraryMovie.findOne({movie_id: movieID, user_id: user._id})
  if(movie){
    return true
  }
  return false
}
/**
 * Checks if a give tv-show is in library for a given user
 * @param movieID
 * @param user
 * @returns {Promise.<boolean>}
 */
const movieInWatchlist = async (movieID, user) => {
  let movie =  await WatchlistMovie.findOne({movie_id: movieID, user_id: user._id})
  if(movie){
    return true
  }
  return false
}

module.exports = {
  movieInLibrary,
  movieInWatchlist
}
