const mongoose = require('mongoose')

let Schema = mongoose.Schema

/**
 * Define Shema for userMovie,
 * many to many relation for move and users
 */
let userMovieSchema = new Schema({
  move_id: { type: String, required: true, unique: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
})

UserMovie = mongoose.model('UserMovie', userMovieSchema)

module.exports = UserMovie
