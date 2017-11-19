
module.exports = function (sequelize, DataTypes) {
  let Movie = sequelize.define('Movie', {
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
  Movie.associate = (models) => {
    Movie.hasMany(models.WatchlistMovie, {
      foreignKey: {
        allowNull: true
      }
    })
    Movie.hasMany(models.LibraryMovie, {
      foreignKey: {
        allowNull: true
      }
    })
    Movie.hasMany(models.UserHistory, {
      foreignKey: {
        allowNull: true
      }
    })
  }
  return Movie
}
