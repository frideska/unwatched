// Controller for Series model

const Series = require('../models/index').Series

module.exports = {

  /**
   * @description Create a new Message using model.create()
   * @param message
   * @returns {Promise.<Message>}
   */
  async create (series) {
    const dbSeries = await Series.findOne({where: {id: series.id}})
    if (!dbSeries) {
      return Series.create(series)
    }
    return dbSeries || series
  },

  /**
   * @description Delete an existing Message by the unique ID using model.destroy()
   * @param series
   * @returns {Promise}
   */
  deleteSeries (series) {
    return series.destroy()
  },

  /**
   * @descriptio Gets all to a specific user
   * @param user
   * @returns {Promise.<Message>}
   */
  getAllToUser (user) {
    return Series.findAll({
      where: {
        UserId: user.id
      }
    })
  },

  /**
   * @description Get all
   * @returns {Promise.<Message>}
   */
  getAll () {
    return Series.findAll()
  }
}
