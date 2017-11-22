
module.exports = (sequelize, DataTypes) => {
  let GenreTV = sequelize.define('GenreTv', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {}
    }
  })
  return GenreTV
}
