const GenreMovie = require('../models').GenreMovie
const GenreTv = require('../models').GenreTv
const Op = require('../models').Sequelize.Op

module.exports = {
  async createGenreMovie (genre) {
    try {
      let dbGenre = await GenreMovie.findOne({ where: { id: genre.id } })
      if (!dbGenre) {
        dbGenre = await GenreMovie.create(genre)
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
      }
      return dbGenre || genre
    } catch (err) {
      console.error(err)
    }
  },

  async getGenreMovie (ids) {
    try {
      let genres = await GenreMovie.findAll({
        where: {id: { [Op.or]: ids }}, raw: true
      })
      if (genres) {
        genres = await genres.map((g) => g.name)
        return genres
      }
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
      if (genres) {
        genres = await genres.map((g) => g.name)
        return genres
      }
      return false
    } catch (err) {
      console.error(err)
    }
  },

  getGenreTvMem (ids) {
    return ids.map((id) => {
      const genre = global.GenreSeries[id]
      //console.log(genre)
      return genre
    })
  },

  getGenreMovieMem (ids) {
    console.log(global.GenreMovies)
    return ids.map((id) => {
      const genre = global.GenreMovies[id]
      //console.log(genre)
      return genre
    })
  }
}
