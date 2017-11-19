
module.exports = (sequelize, DataTypes) => {
  let GenreMovie = sequelize.define('GenreMovie', {
    genre_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {}
    }
  })
  return GenreMovie
}
