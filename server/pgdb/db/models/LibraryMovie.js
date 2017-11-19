
module.exports = (sequelize, DataTypes) => {
  let LibraryMovie = sequelize.define('LibraryMovie', {
    date: { type: DataTypes.DATE, defaultValue: new Date() }
  })
  LibraryMovie.associate = (models) => {
    LibraryMovie.belongsTo(models.Movie, {
      foreignKey: {
        allowNull: true
      }
    })
    LibraryMovie.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    })
  }
  return LibraryMovie
}
