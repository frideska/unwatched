
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
     * Define User relations to Watchlist
     */
    User.belongsToMany(models.Movie, {
      through: 'Watchlist'
    })
    User.belongsToMany(models.Series, {
      through: 'Watchlist'
    })

    /**
     * Define User relations to Library
     */
    User.belongsToMany(models.Movie, {
      through: 'Library'
    })
    User.belongsToMany(models.Series, {
      through: 'Library'
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
