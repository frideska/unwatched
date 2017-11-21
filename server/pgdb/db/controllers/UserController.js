
const User = require('../models/index').User

console.log()

/**
 * @description Creates and returns a Promise for that user
 * @param user
 * @returns {Promise.<User, created>}
 */
let createUser = async (user) => {
  try {
    const u = await User.create(user)
    return u
  } catch (err) {
    console.error(err)
  }
}

let setWatchlist = (user, movie) => {
  user.setMovies(movie)
}

/**
 * @description Gets a user by UserId and returns a Promise for that user
 * @param UserId
 * @returns {Promise.<User>}
 */
let getById = async (id) => {
  try {
    const u = await User.find({
      where: {
        id: id
      },
      raw: true
    })
    return u
  } catch (err) {
    console.error(err)
  }
}

/**
 * @description Gets all users
 * @returns {Promise.<Array.<User>>}
 */
let getAllUsers = () => {
  return User.findAll({include: ['Movies']})
}

/**
 * @description Gets all watchlist objects related to the user
 * @param user
 * @returns {Promise.<Array.<Lecture>>}
 */
let getMovieWatchlistForUser = (user) => {
  return user.getWatchlist()
}

/**
 * @description Gets all watchlist objects related to the user
 * @param user
 * @returns {Promise.<Array.<Lecture>>}
 */
let getSeriesWatchlistForUser = (user) => {
  return user.getWatchlist()
}

/**
 * @description Gets all watchlist objects related to the user
 * @param user
 * @returns {Promise.<Array.<Lecture>>}
 */
let getMovieLibraryForUser = (user) => {
  return user.getLibrary()
}

/**
 * @description Gets all watchlist objects related to the user
 * @param user
 * @returns {Promise.<Array.<Lecture>>}
 */
let getSeriesLibraryForUser = (user) => {
  return user.getLibrary()
}

/**
 * @description Adds user to a lecture
 * @param user
 * @param lecture
 * @returns {Promise}
 */
let addMovieToWatchlist = (user, watchlist) => {
  return user.addwatchlist(watchlist)
}

/**
 * @description Adds user to a lecture
 * @param user
 * @param lecture
 * @returns {Promise}
 */
let addSeriesToWatchlist = (user, watchlist) => {
  return user.addwatchlist(watchlist)
}

/**
 * @description Adds user to a lecture
 * @param user
 * @param lecture
 * @returns {Promise}
 */
let addMovieToLibrary = (user, library) => {
  return user.addLibrary(library)
}

/**
 * @description Adds user to a lecture
 * @param user
 * @param lecture
 * @returns {Promise}
 */
let addSeriesToLibrary = (user, library) => {
  return user.addLibrary(library)
}

module.exports = {
  setWatchlist,
  createUser,
  getById,
  getAllUsers,
  getMovieLibraryForUser,
  getSeriesLibraryForUser,
  getMovieWatchlistForUser,
  getSeriesWatchlistForUser,
  addMovieToLibrary,
  addMovieToWatchlist,
  addSeriesToLibrary,
  addSeriesToWatchlist
}
