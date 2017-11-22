
module.exports = (sequelize, DataTypes) => {
  let LibrarySeries = sequelize.define('LibrarySeries', {
    date: { type: DataTypes.DATE, defaultValue: new Date() }
  })
  LibrarySeries.associate = (models) => {
    LibrarySeries.belongsTo(models.Series, {
      foreignKey: {
        allowNull: true
      }
    })
    LibrarySeries.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    })
  }
  return LibrarySeries
}
