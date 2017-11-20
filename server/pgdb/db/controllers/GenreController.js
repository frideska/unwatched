const GenreMovie = require('../models').GenreMovie
const GenreTv = require('../models').GenreTv
const Op = require('./models').Op

module.exports = {
  async createGenreMovie (genre) {
    try {
      const dbGenre = await GenreMovie.create(genre)
      return dbGenre
    } catch (err) {
      console.error(err)
    }
  },

  async createGenreTv (genre) {
    try {
      const dbGenre = await GenreTv.create(genre)
      return dbGenre
    } catch (err) {
      console.error(err)
    }
  },

  async getGenreMovie (ids) {
    try {
      const genres = GenreMovie.findAll({
        where: {id: { [Op.or]: ids }}
      })
      if (genres) {
        console.log(genres.map((g) => g.name))
        return genres.map((g) => g.name)
      }
      return false
    } catch (err) {
      console.error(err)
    }
  },

  async getGenreTv (ids) {
    try {
      const genres = GenreTv.findAll({
        where: {id: { [Op.or]: ids }}
      })
      if (genres) {
        console.log(genres.map((g) => g.name))
        return genres.map((g) => g.name)
      }
      return false
    } catch (err) {
      console.error(err)
    }
  }
}
