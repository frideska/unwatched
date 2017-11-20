const router = require('express').Router()

let WatchlistSeriesController = require('../../../pgdb/db/controllers/WatchlistSeriesController')

/**
 * Allows the user to add a Series to Watchlist,
 * the Series is then added to the Watchlist collection
 * @param req.body.id
 */
router.post('/', (req, res) => {
  if (WatchlistSeriesController.addSeriesToUser(req.body.id, req.user.id)) {
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
})

/**
 * Returnes all the Series a user have in their Watchlist
 * @param req.params.order
 * @param req.params.sortBy
 * @param req.params.search
 * @param req.params.page
 */
router.get('/', async (req, res) => {
  const options = {
    order: req.params.order || 'ASC',
    orderBy: req.params.sortBy || 'date',
    query: req.params.search || '',
    page: req.params.page || 1,
    size: 10
  }
  let series = await WatchlistSeriesController.getAllSeriesForUser(req.user.id, options)
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
 * Removing Series from Watchlist for the current User, and a given SerieId
 * @param req.params.id
 */
router.delete('/', async (req, res) => {
  if (await WatchlistSeriesController.removeSeriesFromUser(req.params.id, req.user.id)) {
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
})

module.exports = router
