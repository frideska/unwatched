const UserMovie = require('../models/Library/LibraryUserMovie')
const WatchlistUserMovie = require('../models/Watchlist/WatchlistUserMovie')
const WatchlistUserTv = require('../models/Watchlist/WatchlistUserTv')
const UserTv = require('../models/Library/LibraryUserTv')
const tmdbWrapper = require('../../tmdb/')


/**
 * Creates a new entry in the UserMovie collection
 * with a given movie_id and user._id
 * @param movieID
 * @param user
 * @returns {Promise.<boolean>}
 */
let newMovie = async (movieID, user) => {
  let movie = await UserMovie.findOne({movie_id: movieID, user_id: user._id})
  //Checks if the move is in watchlist, if so remove it
  let movieWatchlist = await WatchlistUserMovie.findOne({movie_id: movieID, user_id: user._id})
  if(movieWatchlist)
    try {
      await WatchlistUserMovie.remove({movie_id: movieID, user_id: user._id})
    } catch (err) {
      console.log(err)
      return false
    }
  if(!movie){
    try {
      let userMovie = new UserMovie()
      userMovie.movie_id = movieID
      userMovie.user_id = user._id
      userMovie.save()
      return true
    }
    catch(err) {
      console.error(error)
      return false
    }
  }
  return false
}

/**
 * Removes any nulls or undefined from object before returning it
 */
let clean = (librarylist) => {
  let returnList = librarylist.filter((movie) => movie)
  return returnList
}

/**
 * Findes all the movies the given user have in his/hers library
 * @param user
 * @returns {Promise.<*[]>}
 */
let findMovieForUser = async (user) => {
  //Findes all the movies, that are in the library of the current user
  let userMovies = await UserMovie.find({user_id: user._id})
  //For each id in the UserMovie database, we return all the informasjon about the movie, we use
  //promise all to make sure that the array is not returned while pending
  try {
    return clean(await Promise.all(userMovies.map(async (movie) =>  {
      const watchlist = false
      const library = true
      return await tmdbWrapper.details.movie(movie.movie_id, watchlist, library)
    })))
  }catch (err) {
    console.log(err)
  }
}

/**
 * Removes all movies with the given MovieID and user
 * @param movieID
 * @param user
 * @returns {Promise.<boolean>}
 */
let removeMovieForUser = async (movieID, user) => {
  try {
    await UserMovie.remove({movie_id: movieID, user_id: user._id})
  } catch (err) {
    console.log(err)
    return false
  }
  return true
}


/**
 * Adds a new tv show for a given user
 * @param tvID
 * @param user
 * @returns {Promise.<boolean>}
 */
let newTv = async (tvID, user) => {
  let tv = await UserTv.findOne({tv_id: tvID, user_id: user._id})
  //Checks if the tv-show is in watchlist, if so remove it
  let tvWatchlist = await WatchlistUserTv.findOne({tv_id: tvID, user_id: user._id})
  if(tvWatchlist)
    try {
      await WatchlistUserTv.remove({tv_id: tvID, user_id: user._id})
    } catch (err) {
      console.log(err)
      return false
    }
  if(!tv){
    try {
      let userTv = new UserTv()
      userTv.tv_id = tvID
      userTv.user_id = user._id
      userTv.save()
      return true
    }
    catch(err) {
      console.error(err)
      return false
    }
  }
  return false
}

/**
 * Findes all the movies the given user have in his/hers library
 * @param user
 * @returns {Promise.<*[]>}
 */
let findTvForUser = async (user) => {
  //Findes all the movies, that are in the library of the current user
  let userTv = await UserTv.find({user_id: user._id})
  //For each id in the tvMovie database, we return all the informasjon about the movie, we use
  //promise all to make sure that the array is not returned while pending
  try {
    return clean(await Promise.all(userTv.map(async (tv) => {
      const watchlist = false
      const library = true
      const details = await tmdbWrapper.details.tv(tv.tv_id, watchlist, library)
      return details
    })))
  }catch (err) {
    console.log(err)
  }
}
/**
 * Removes all movies with the given MovieID and user
 * @param movieID
 * @param user
 * @returns {Promise.<boolean>}
 */
let removeTvForUser = async (tvID, user) => {
  try {
    await UserTv.remove({tv_id: tvID, user_id: user._id})
  } catch (err) {
    console.log(err)
    return false
  }
  return true
}



module.exports = {
  newMovie,
  findMovieForUser,
  removeMovieForUser,
  newTv,
  findTvForUser,
  removeTvForUser
}
