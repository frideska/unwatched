
module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    id: { type: DataTypes.STRING, primaryKey: true },
    token: DataTypes.STRING,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    admin: { type: DataTypes.BOOLEAN, defaultValue: false },
    date: { type: DataTypes.DATE, defaultValue: new Date() }
  })
  User.associate = (models) => {
    /**
     * Define User relations to Library
     */
    User.hasMany(models.LibraryMovie, {
      foreignKey: {
        allowNull: true
      }
    })
    User.hasMany(models.LibrarySeries, {
      foreignKey: {
        allowNull: true
      }
    })

    /**
     * Define User relations to Watchlist
     */
    User.hasMany(models.WatchlistMovie, {
      foreignKey: {
        allowNull: true
      }
    })
    User.hasMany(models.WatchlistSeries, {
      foreignKey: {
        allowNull: true
      }
    })

    /**
     * Define User relations to History
     */
    User.hasMany(models.UserHistory, {
      foreignKey: {
        allowNull: true
      }
    })
  }
  return User
}
