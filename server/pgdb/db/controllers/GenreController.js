const GenreMovie = require('../models').GenreMovie
const GenreTv = require('../models').GenreTv
const Op = require('../models').Sequelize.Op

module.exports = {
  async createGenreMovie (genre) {
    try {
      let dbGenre = await GenreMovie.findOne({ where: { id: genre.id } })
      if (!dbGenre) {
        dbGenre = await GenreMovie.create(genre)
        //console.log(`Created genre ${dbGenre.name}`)
      }
      return dbGenre || genre
    } catch (err) {
      console.error(err)
    }
  },

  async createGenreTv (genre) {
    try {
      let dbGenre = await GenreTv.findOne({ where: { id: genre.id } })
      if (!dbGenre) {
        dbGenre = await GenreTv.create(genre)
        //console.log(`Created genre ${dbGenre.name}`)
      }
      return dbGenre || genre
    } catch (err) {
      console.error(err)
    }
  },

  async getGenreMovie (ids) {
    try {
      //console.log(ids)
      let genres = await GenreMovie.findAll({
        where: {id: { [Op.or]: ids }}, raw: true
      })
      //console.log(genres.length)
      if (genres) {
        //console.log('Before genres map')
        genres = await genres.map((g) => g.name)
        //console.log(genres)
        return genres
      }
      //console.log('No genres found')
      return false
    } catch (err) {
      console.error(err)
    }
  },

  async getGenreTv (ids) {
    try {
      let genres = await GenreTv.findAll({
        where: {id: { [Op.or]: ids }}, raw: true
      })
      //console.log(genres.length)
      if (genres) {
        //console.log('Before genres map')
        genres = await genres.map((g) => g.name)
        //console.log(genres)
        return genres
      }
      //console.log('No genres found')
      return false
    } catch (err) {
      console.error(err)
    }
  }
}
