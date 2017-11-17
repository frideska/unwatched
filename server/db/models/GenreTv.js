const mongoose = require('mongoose')

let Schema = mongoose.Schema

/**
 * Define Shema for Movie
 */
let GenreSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String }
})

GenreTv = mongoose.model('GenreTv', GenreSchema)

module.exports = GenreTv
