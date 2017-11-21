const router = require('express').Router()

const LibrarySeriesController = require('../../../pgdb/db/controllers/LibrarySeriesController')
const SeriesController = require('../../../pgdb/db/controllers/SeriesController')
const tmdbWrapper = require('../../../tmdb/')

/**
 * Allows the user to add a Series to library,
 * the Series is then added to the Library collection
 * @param req.body.id
 */
router.post('/', async (req, res) => {
  try {
    const series = await tmdbWrapper.details.tv(req.body.id)
    const dbSeries = await SeriesController.create(series)
    if (await LibrarySeriesController.addSeriesToUser(dbSeries.id, req.user.id)) {
      res.sendStatus(200)
    } else {
      const response = {
        errors: [{
          userMessage: 'Sorry, the series could not be added',
          code: 400
        }]
      }
      res.status = 400
      res.send(response)
    }
  } catch (err) {
    console.error(err)
  }
})

/**
 * Returnes all the Series a user have in their library
 * @param req.query.order
 * @param req.query.orderBy
 * @param req.query.search
 * @param req.query.page
 */
router.get('/', async (req, res) => {
  let orderBy = req.query.orderBy
  let order = 'ASC'
  if (orderBy.charAt(0) === '-') {
    orderBy = orderBy.substring(1)
    order = 'DESC'
  }
  const options = {
    order: req.query.order || order,
    orderBy: orderBy || 'title',
    query: req.query.search || '',
    page: req.query.page || 1,
    size: 10
  }
  let series = await LibrarySeriesController.getAllSeriesForUser(req.user.id, options)
  if (series) {
    res.json({
      docs: series,
      page: options.page,
      size: options.size
    })
  } else {
    const response = {
      errors: [{
        userMessage: 'Sorry, something went wrong',
        code: 400
      }]
    }
    res.status = 400
    res.send(response)
  }
})

/**
 * Removing Series from Library for the current User, and a given SerieId
 * @param req.body.id
 */
router.delete('/', async (req, res) => {
  try {
    if (await LibrarySeriesController.removeSeriesFromUser(req.body.id, req.user.id)) {
      res.sendStatus(204)
    } else {
      const response = {
        errors: [{
          userMessage: 'Sorry, we were unable to delete that elemeent',
          code: 400
        }]
      }
      res.status = 400
      res.send(response)
    }
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
