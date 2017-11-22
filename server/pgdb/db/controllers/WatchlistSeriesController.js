
const Watchlist = require('../models').WatchlistSeries
const Library = require('../models').LibrarySeries

const Op = require('../models').Sequelize.Op

module.exports = {
  async addSeriesToUser(SeriesId, UserId) {
    try {
      const series = {SeriesId: SeriesId, UserId: UserId}

      const dbWatchlistSeries = await Watchlist.findOne({
        where: series
      })
      const dbLibrarySeries = await Library.findOne({
        where: series
      })
      if (!dbLibrarySeries && !dbWatchlistSeries) {
        await Watchlist.create(series)
        return true
      }
      return false
    } catch (err) {
      console.error(err)
    }
  },
  async getPageCount(UserId, options) {
    try {
      const tv = await Watchlist.findAll({
        where: {UserId: UserId},
        include: [{
          association: 'Series',
          where: {title: {[Op.iLike]: `%${options.query}%`}}
        }],
        order: [
          ['Series', options.orderBy, options.order]
        ]
      })
      return tv.length
    } catch (err) {
      console.error(err)
      return -1
    }
  },

  async getAllSeriesForUser(UserId, options) {
    try {
      const dbWatchlistSeries = await Watchlist.findAll({
        where: {UserId: UserId},
        include: [{
          association: 'Series',
          where: {title: {[Op.iLike]: `%${options.query}%`}}
        }],
        order: [
          ['Series', options.orderBy, options.order]
        ],
        limit: options.size,
        offset: ((options.page - 1) * options.size)
      })
      if (dbWatchlistSeries) {
        return dbWatchlistSeries.map((series) => series.Series)
      } else {
        return []
      }
    } catch (err) {
      console.error(err)
    }
  },

  async removeSeriesFromUser(SeriesId, UserId) {
    try {
      const dbWatchlistSeries = await Watchlist.findOne({
        where: {SeriesId: SeriesId, UserId: UserId}
      })
      if (dbWatchlistSeries) {
        await dbWatchlistSeries.destroy()
        return true
      }
      return false
    } catch (err) {
      console.error(err)
    }
  },

  async seriesInWatchlist(SeriesId, UserId) {
    try {
      const series = await Watchlist.findOne({
        where: {SeriesId: SeriesId, UserId: UserId}
      })
      if (series) {
        return true
      }
      return false
    } catch (err) {
      console.error(err)
    }
  }
}
