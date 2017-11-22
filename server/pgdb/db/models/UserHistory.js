
module.exports = (sequelize, DataTypes) => {
  let UserHistory = sequelize.define('UserHistory', {
    date: { type: DataTypes.DATE, defaultValue: new Date() }
  })
  UserHistory.associate = (models) => {
    UserHistory.belongsTo(models.Series, {
      foreignKey: {
        allowNull: true
      }
    })
    UserHistory.belongsTo(models.Movie, {
      foreignKey: {
        allowNull: true
      }
    })
    UserHistory.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    })
  }
  return UserHistory
}
