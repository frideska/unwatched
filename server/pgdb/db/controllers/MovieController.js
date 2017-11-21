// Controller for Movie model

const Movie = require('../models/index').Movie

module.exports = {

  /**
   * @description Create a new Message using model.create()
   * @param message
   * @returns {Promise.<Message>}
   */
  async create (movie) {
    const dbMovie = await Movie.findOne({where: {id: movie.id}})
    if (!dbMovie) {
      //console.log(`Creating Movie '${movie.title}'`)
      return Movie.create(movie)
    }
    //console.log(`Movie '${dbMovie.title}' already created`)
    return dbMovie
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
        UserId: user.id
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
