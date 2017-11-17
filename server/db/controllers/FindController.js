const LibraryTv = require('../models/Library/LibraryUserTv')
const WatchlistTv = require('../models/Watchlist/WatchlistUserTv')
const LibraryMovie = require('../models/Library/LibraryUserMovie')
const WatchlistMovie = require('../models/Watchlist/WatchlistUserMovie')
const Movie = require('../models/Movie')
/**
 * Checks if a give tv-show is in library for a given user
 * @param movieID
 * @param user
 * @returns {Promise.<boolean>}
 */
const tvInLibrary = async (tvID, user) => {
  let tv = await LibraryTv.findOne({tv_id: tvID, user_id: user._id})
  if (tv) {
    return true
  }
  return false
}
/**
 * Checks if a give tv-show is in watchlist for a given user
 * @param movieID
 * @param user
 * @returns {Promise.<boolean>}
 */
const tvInWatchlist = async (tvID, user) => {
  let tv = await WatchlistTv.findOne({tv_id: tvID, user_id: user._id})
  if (tv) {
    return true
  }
  return false
}
/**
 * Checks if a give movie is in library for a given user
 * @param movieID
 * @param user
 * @returns {Promise.<boolean>}
 */
const movieInLibrary = async (movieID, user) => {
  let movieKey = await Movie.findOne({movie_id: movieID})
  if(movieKey){
    let userMovie = await LibraryMovie.findOne({movie_id: movieKey._id, user_id: user._id})
    if (userMovie) {
      return true
    }
  }
  return false
}
/**
 * Checks if a give movie is in watchlist for a given user
 * @param movieID
 * @param user
 * @returns {Promise.<boolean>}
 */
const movieInWatchlist = async (movieID, user) => {
  let movieKey = await Movie.findOne({movie_id: movieID})
  if(movieKey){
    let userMovie = await WatchlistMovie.findOne({movie_id: movieKey._id, user_id: user._id})
    if (userMovie) {
      return true
    }
  }
  return false
}

module.exports = {
  tvInLibrary,
  tvInWatchlist,
  movieInLibrary,
  movieInWatchlist
}
