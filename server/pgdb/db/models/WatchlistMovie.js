
module.exports = (sequelize, DataTypes) => {
  let WatchlistMovie = sequelize.define('WatchlistMovie', {
    date: { type: DataTypes.DATE, defaultValue: new Date() }
  })
  WatchlistMovie.associate = (models) => {
    WatchlistMovie.belongsTo(models.Movie, {
      foreignKey: {
        allowNull: true
      }
    })
    WatchlistMovie.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    })
  }
  return WatchlistMovie
}
