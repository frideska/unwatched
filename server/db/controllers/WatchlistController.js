const UserMovie = require('../models/Watchlist/WatchlistUserMovie')
const UserTv = require('../models/Watchlist/WatchlistUserTv')
const LibraryUserMovie = require('../models/Library/LibraryUserMovie')
const LibraryUserTv = require('../models/Library/LibraryUserTv')
const tmdbWrapper = require('../../tmdb/')
const Movie = require('../models/Movie')
const Tv = require('../models/Tv')

/**
 * Retunes a movie element for a given movieID
 * @param moiveID
 * @param user
 * @returns {Promise.<*>}
 */
let getMovieForUser = async(movieID, user, type) => {
    let movieKey = await Movie.findOne({movie_id: movieID})
    if(movieKey){
      if(type==='watchlist') {
        let userMovie = await UserMovie.findOne({movie_id: movieKey, user_id: user._id})
        return userMovie ? userMovie: false
      }
      else if(type==='library') {
        let userMovie = await LibraryUserMovie.findOne({movie_id: movieKey, user_id: user._id})
        return userMovie ? userMovie: false
      }
    }
    return false
}

/**
 * Findes the _id for a given movie_id
 * @param moiveID
 * @returns {Promise.<*>}
 */
let getMovieKey = async(movieID) => {
  const movieKey = await Movie.findOne({movie_id: movieID})
  if(!movieKey) {
    const addMovie = await tmdbWrapper.details.movie(movieID, false, false)
    if(addMovie) {
      const result = await Movie.findOne({movie_id: movieID})
      return result._id
    }
    return false
  }
  return movieKey._id
}
let getMovieId = async(movieKey) => {
  result =  await Movie.findOne({_id: movieKey})
  let id = result.movie_id
  return id
}

let getTvid = async(tvKey) => {
  result =  await Tv.findOne({_id: tvKey})
  let id = result.tv_id
  return id
}

/**
 * Retunes a tv element for a given tvID
 * @param tvID
 * @param user
 * @returns {Promise.<*>}
 */
let getTvForUser = async(tvID, user, type) => {
  let tvKey = await Tv.findOne({tv_id: tvID})
  if(tvKey){
    if(type==='library') {
      let userTv = await LibraryUserTv.findOne({tv_id: tvKey, user_id: user._id})
      return userTv ? userTv: false
    }
    else if(type==='watchlist') {
      let userTv = await UserTv.findOne({tv_id: tvKey, user_id: user._id})
      return userTv ? userTv: false
    }
  }
  return false
}

/**
 * Findes the _id for a given tv_id
 * @param moiveID
 * @returns {Promise.<*>}
 */
let getTvKey = async(tvID) => {
  const tvKey = await Tv.findOne({tv_id: tvID})
  if(!tvKey) {
    const addTv = await tmdbWrapper.details.tv(tvID, false, false)
    if(addTv) {
      const result = await Tv.findOne({tv_id: tvID})
      return result._id
    }
    return false
  }
  let id =  tvKey._id
  return id
}

let getTvId = async(tvKey) => {
  result =  await Tv.findOne({_id: tvKey})
  let id = result.tv_id
  return id
}

/**
 * Creates a new entry in the UserMovie collection
 * with a given movie_id and user._id
 * @param movieID
 * @param user
 * @returns {Promise.<boolean>}
 */
let newMovie = async (movieID, user) => {
  //Looks for a given movie in watchlist and library
  let movieWatchlist = await getMovieForUser(movieID, user, 'watchlist')
  let movieLibrary = await getMovieForUser(movieID, user, 'library')
  // to add a movie it can not be in library or watchlist
  if (!movieWatchlist && !movieLibrary) {
    try {
      let userMovie = new UserMovie()
      userMovie.movie_id = await getMovieKey(movieID)
      userMovie.user_id = user._id
      userMovie.save()
      return true
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
let clean = (watchlist) => {
  let returnList = watchlist.filter((movie) => movie)
  return returnList
}
let response = (databaseEntry, type) => {
  return {
      id: databaseEntry.movie_id || databaseEntry.tv_id,
      title: databaseEntry.title,
      genres: databaseEntry.genres ,
      overview: databaseEntry.overview,
      backdrop_path: databaseEntry.backdrop_path,
      poster_path: databaseEntry.poster_path,
      release_date: databaseEntry.release_date,
      vote_average: databaseEntry.vote_average,
      watchlist: true,
      library: false,
      media_type: type
  }
}

/**
 * Findes all the movies the given user have in his/hers watchlist
 * @param user
 * @returns {Promise.<*[]>}
 */
let findMovieForUser = async (user) => {
  try {
  // Findes all the movies, that are in the watchlist of the current user
    var query   = {user_id: user._id}
    var options = {
      populate: 'movie_id',
      lean:     true,
      offset:   0,
      limit:    10
    }
  let userMovies = await UserMovie.paginate(query, options)
  if (userMovies) {
    userMovies.docs = userMovies.docs.map( (movie) => {
      return response(movie.movie_id,'movie')
    })
    return userMovies
  }
  } catch(err) {
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
    const movieKey = await getMovieKey(movieID)
    await UserMovie.remove({movie_id: movieKey, user_id: user._id})
  } catch (err) {
    console.log(err)
    return false
  }
  return true
}

/**
 * Addes a new tv-show to the watchlist for a given user
 * @param tvID
 * @param user
 * @returns {Promise.<boolean>}
 */
let newTv = async (tvID, user) => {
  let tvLibrary = await getTvForUser(tvID, user, 'library')
  let tvWatchlist = await getTvForUser(tvID, user, 'watchlist')
  let tvKey = await getTvKey(tvID)
  if (!tvWatchlist && !tvLibrary && tvKey) {
    try {
      let userTv = new UserTv()
      userTv.tv_id = tvKey
      userTv.user_id = user._id
      userTv.save()
      return true
    } catch (err) {
      console.error(err)
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
let findTvForUser = async (user) => {
  // Findes all the movies, that are in the watchlist of the current user
  let userTv = await UserTv.find({user_id: user._id})
  // For each id in the tvMovie database, we return all the informasjon about the movie, we use
  // promise all to make sure that the array is not returned while pending
  try {
    return clean(await Promise.all(userTv.map(async (tv) => {
      let tvID = await getTvId(tv.tv_id)
      const watchlist = true
      const library = false
      const details = await tmdbWrapper.details.tv(tvID, watchlist, library)
      return details
    })))
  } catch (err) {
    console.log(err)
  }
}

/**
 * Removes all movies with the given MovieID and user
 * @param movieID
 * @param user
 * @returns {Promise.<boolean>
 */
let removeTvForUser = async (tvID, user) => {
  try {
    const tvKey = await getTvKey(tvID)
    await UserTv.remove({tv_id: tvKey, user_id: user._id})
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
