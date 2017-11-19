
module.exports = function (sequelize, DataTypes) {
  let Series = sequelize.define('Series', {
    tv_id: { type: DataTypes.INTEGER },
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
    Series.belongsToMany(models.User, {
      through: 'Watchlist'
    })
    Series.belongsToMany(models.User, {
      through: 'Library'
    })
  }
  return Series
}
