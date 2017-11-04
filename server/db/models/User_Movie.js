const mongoose = require('mongoose')

let Schema = mongoose.Schema

/**
 * Define Shema for userMovie,
 * many to many relation for move and users
 */
let userMovieScema = new Schema({
  move_id: { type: String, required: true, unique: true },
  user_id: { type: String, required: true, unique: true },
})

userMovie = mongoose.model('Movie', userMovieScema)

module.exports = userMovie
