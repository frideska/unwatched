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
  let movieWatchlist = await WatchlistUserMovie.findOne({movie_id: movieID, user_id: user._id})
  let movieLibrary = await UserMovie.findOne({movie_id: movieID, user_id: user._id})
  if (movieWatchlist) {
    try {
      await WatchlistUserMovie.remove({movie_id: movieID, user_id: user._id})
    } catch (err) {
      console.error(err)
      return false
    }
  }
  if (!movieLibrary) {
    try {
      let movieDetails = await tmdbWrapper.details.movie(movieID, false, false)
      if (movieDetails) {
        movieDetails.movie_id = movieDetails.id
        movieDetails.user_id = user._id
        await UserMovie.create(movieDetails)
        return true
      }
    } catch (err) {
      console.error(err)
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

let response = (databaseEntry, type) => {
  return {
    id: databaseEntry.movie_id || databaseEntry.tv_id,
    title: databaseEntry.title,
    genres: databaseEntry.genres,
    overview: databaseEntry.overview,
    backdrop_path: databaseEntry.backdrop_path,
    poster_path: databaseEntry.poster_path,
    release_date: databaseEntry.release_date,
    vote_average: databaseEntry.vote_average,
    watchlist: false,
    library: true,
    media_type: type
  }
}

/**
 * Findes all the movies the given user have in his/hers library
 * @param user
 * @returns {Promise.<*[]>}
 */
let findMovieForUser = async (user, sortType, search) => {
  try {
    let query = {user_id: user._id}
    if (search) {
      query.title = {'$regex': search, '$options': 'i'}
    }
    let options = {
      lean: true,
      offset: 0,
      limit: 10
    }
    if (sortType !== 'standard') {
      options.sort = sortType
    }
    let userMovies = await UserMovie.paginate(query, options)
    if (userMovies) {
      userMovies.docs = userMovies.docs.map((movie) => {
        return response(movie, 'movie')
      })
      return userMovies
    }
  } catch (err) {
    console.error(err)
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
  let tvWatchlist = await WatchlistUserTv.findOne({tv_id: tvID, user_id: user._id})
  let tvLibrary = await UserTv.findOne({tv_id: tvID, user_id: user._id})
  if (tvWatchlist) {
    try {
      await WatchlistUserTv.remove({tv_id: tvID, user_id: user._id})
    } catch (err) {
      console.error(err)
      return false
    }
  }
  if (!tvLibrary) {
    try {
      let userTv = await tmdbWrapper.details.tv(tvID, false, false)
      userTv.tv_id = userTv.id
      userTv.user_id = user._id
      await UserTv.create(userTv)
      return true
    } catch (err) {
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
let findTvForUser = async (user, sortType, search) => {
  // Findes all the movies, that are in the library of the current user
  let query = {user_id: user._id}
  if (search) {
    query.title = {'$regex': search, '$options': 'i'}
  }
  let options = {
    lean: true,
    offset: 0,
    limit: 10
  }
  if (sortType !== 'standard') {
    options.sort = sortType
  }

  // Findes all the movies, that are in the library of the current user
  let userTv = await UserTv.paginate(query, options)
  try {
    if (userTv) {
      userTv.docs = userTv.docs.map((tv) => {
        return response(tv, 'tv')
      })
      return userTv
    }
  } catch (err) {
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
