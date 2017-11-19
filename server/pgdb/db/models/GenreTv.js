
module.exports = (sequelize, DataTypes) => {
  let GenreTV = sequelize.define('GenreTV', {
    genre_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {}
    }
  })
  return GenreTV
}
