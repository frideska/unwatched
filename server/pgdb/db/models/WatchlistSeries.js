
module.exports = (sequelize, DataTypes) => {
  let WatchlistSeries = sequelize.define('WatchlistSeries', {
    date: { type: DataTypes.DATE, defaultValue: new Date() }
  })
  WatchlistSeries.associate = (models) => {
    WatchlistSeries.belongsTo(models.Series, {
      foreignKey: {
        allowNull: true
      }
    })
    WatchlistSeries.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    })
  }
  return WatchlistSeries
}
