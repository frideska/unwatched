const mongoose = require('mongoose')

let Schema = mongoose.Schema

/**
 * Define Shema for movies
 */
let movieSchema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String },
})

movie = mongoose.model('Movie', movieSchema)

module.exports = movie
