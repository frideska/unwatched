
module.exports = (sequelize, DataTypes) => {
  let GenreMovie = sequelize.define('GenreMovie', {
    id: { type: DataTypes.INTEGER, primarykey: true },
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {}
    }
  })
  return GenreMovie
}
