
const Library = require('../models').LibrarySeries
const Watchlist = require('../models').WatchlistSeries

const Op = require('../models').Sequelize.Op

module.exports = {
  async addSeriesToUser (SeriesId, UserId) {
    try {
      const series = { SeriesId: SeriesId, UserId: UserId }

      const dbLibrarySeries = await Library.findOne({
        where: series
      })
      const dbWatchlistSeries = await Watchlist.findOne({
        where: series
      })
      if (!dbLibrarySeries) {
        await Library.create(series)
        if (dbWatchlistSeries) {
          await dbWatchlistSeries.destroy()
        }
        return true
      }
      return false
    } catch (err) {
      console.error(err)
    }
  },

  async getAllSeriesForUser (UserId, options) {
    try {
      const dbLibrarySeries = await Library.findAll({
        where: { UserId: UserId },
        include: [{
          association: 'Series',
          where: { title: { [Op.iLike]: `%${options.query}%` } }
        }],
        limit: options.size,
        offset: ((options.page - 1) * options.size)
      })
      if (dbLibrarySeries) {
        return dbLibrarySeries.map((series) => series.Series)
      } else {
        return []
      }
    } catch (err) {
      console.error(err)
    }
  },

  async removeSeriesFromUser (SeriesId, UserId) {
    try {
      const dbLibrarySeries = await Library.findOne({
        where: { SeriesId: SeriesId, UserId: UserId }
      })
      if (dbLibrarySeries) {
        await dbLibrarySeries.destroy()
        return true
      }
      return false
    } catch (err) {
      console.error(err)
    }
  },

  async seriesInLibrary (SeriesId, UserId) {
    const series = await Library.findOne({
      where: { SeriesId: SeriesId, UserId: UserId }
    })
    if (series) {
      return true
    }
    return false
  }
}
