const UserMovie = require('../models/UserMovie')
const User = require('../models/User')
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
 * Findes all the movies the given user have in his/hers watchlist
 * @param user
 * @returns {Promise.<*[]>}
 */
let findMovieForUser = async (user) => {
  //Findes all the movies, that are in the watchlist of the current user
  let userMovies = await UserMovie.find({user_id: user._id})
  //For each id in the UserMovie database, we return all the informasjon about the movie, we use
  //promise all to make sure that the array is not returned while pending
  try {
    return await Promise.all(userMovies.map(movie => tmdbWrapper.details(movie.movie_id.toString())))
  }catch (err) {
    console.log(err)
    return false
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

module.exports = {
  newMovie,
  findMovieForUser,
  removeMovieForUser
}
