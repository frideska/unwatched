
module.exports = function (sequelize, DataTypes) {
  let Series = sequelize.define('Series', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    title: DataTypes.STRING,
    genres: { type: DataTypes.ARRAY(DataTypes.STRING) },
    overview: { type: DataTypes.TEXT },
    backdrop_path: { type: DataTypes.STRING },
    poster_path: { type: DataTypes.STRING },
    release_date: { type: DataTypes.STRING },
    video: { type: DataTypes.BOOLEAN },
    vote_average: { type: DataTypes.DOUBLE },
    date: { type: DataTypes.DATE, defaultValue: new Date() }
  })
  Series.associate = (models) => {
    Series.hasMany(models.WatchlistSeries, {
      foreignKey: {
        allowNull: true
      }
    })
    Series.hasMany(models.LibrarySeries, {
      foreignKey: {
        allowNull: true
      }
    })
    Series.hasMany(models.UserHistory, {
      foreignKey: {
        allowNull: true
      }
    })
  }
  return Series
}
