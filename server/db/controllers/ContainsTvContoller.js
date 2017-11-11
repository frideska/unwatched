const LibraryTv = require('../models/Library/LibraryUserTv')
const WatchlistTv = require('../models/Watchlist/WatchlistUserTv')

/**
 * Checks if a give tv-show is in library for a given user
 * @param movieID
 * @param user
 * @returns {Promise.<boolean>}
 */
const tvInLibrary = async (tvID, user) => {
  let tv =  await LibraryTv.findOne({tv_id: tvID, user_id: user._id})
  if(tv){
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
const tvInWatchlist = async (tvID, user) => {
  let tv =  await WatchlistTv.findOne({tv_id: tvID, user_id: user._id})
  if(tv){
    return true
  }
  return false
}

module.exports = {
  tvInLibrary,
  tvInWatchlist
}
