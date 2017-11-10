const UserMovie = require('../models/Library/LibraryUserMovie')
const UserTv = require('../models/Library/LibraryUserTv')
const User = require('../models/User')
const tmdbWrapper = require('../../tmdb/')


/**
 * Checks if a give movie is in library for a given user
 * @param movieID
 * @param user
 * @returns {Promise.<boolean>}
 */
let movieInLibrary = async (movieID, user) => {
  let movie =  await UserMovie.findOne({movie_id: movieID, user_id: user._id})
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
let tvInLibrary = async (movieID, user) => {
  let tv =  await UserTv.findOne({movie_id: movieID, user_id: user._id})
  if(tv){
    return true
  }
  return false
}


/**
 * Creates a new entry in the UserMovie collection
 * with a given movie_id and user._id
 * @param movieID
 * @param user
 * @returns {Promise.<boolean>}
 */
let newMovie = async (movieID, user) => {
  let movie = await UserMovie.findOne({movie_id: movieID, user_id: user._id})
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
    let librarylist = await Promise.all(userMovies.map(movie => tmdbWrapper.details.movieDetails(movie.movie_id, user)))
    return clean(librarylist)
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


let newTv = async (tvID, user) => {
  let movie = await UserTv.findOne({tv_id: tvID, user_id: user._id})
  if(!movie){
    try {
      let userTv = new UserTv()
      userTv.movie_id = movieID
      userTv.user_id = user._id
      userTv.save()
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
 * Findes all the movies the given user have in his/hers library
 * @param user
 * @returns {Promise.<*[]>}
 */
let findTvForUser = async (user) => {
  //Findes all the movies, that are in the library of the current user
  let userTv = await UserTv.find({user_id: user._id})
  //For each id in the UserMovie database, we return all the informasjon about the movie, we use
  //promise all to make sure that the array is not returned while pending
  try {
    let tvLibrarylist = await Promise.all(UserTv.map(tv => tmdbWrapper.details.tvDetails(tv.tv_id)))
    return clean(tvLibrarylist)
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
  removeTvForUser,
  movieInLibrary,
  tvInLibrary
}
