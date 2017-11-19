// Controller for Movie model

const Movie = require('../models/index').Movie

module.exports = {

  /**
   * @description Create a new Message using model.create()
   * @param message
   * @returns {Promise.<Message>}
   */
  createMovie (movie) {
    movie.genre_ids = JSON.stringify(movie.genre_ids)
    return Movie.create(movie)
  },

  /**
   * @description Delete an existing Message by the unique ID using model.destroy()
   * @param movie
   * @returns {Promise}
   */
  deleteMovie (movie) {
    return movie.destroy()
  },

  /**
   * @descriptio Gets all to a specific user
   * @param user
   * @returns {Promise.<Message>}
   */
  getAllToUser (user) {
    return Movie.findAll({
      where: {
        UserId: user.google_id
      }
    })
  },

  /**
   * @description Get all
   * @returns {Promise.<Message>}
   */
  getAll () {
    return Movie.findAll()
  }
}
