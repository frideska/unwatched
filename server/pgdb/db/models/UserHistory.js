
module.exports = (sequelize, DataTypes) => {
  let UserHistory = sequelize.define('UserHistory', {
    date: { type: DataTypes.DATE, defaultValue: new Date() }
  })
  UserHistory.associate = (models) => {
    UserHistory.hasMany(models.Series, {
      foreignKey: {
        allowNull: true
      }
    })
    UserHistory.hasMany(models.Movie, {
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
