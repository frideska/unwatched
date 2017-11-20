
module.exports = (sequelize, DataTypes) => {
  let GenreTV = sequelize.define('GenreTV', {
    id: { type: DataTypes.INTEGER, primarykey: true },
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {}
    }
  })
  return GenreTV
}
