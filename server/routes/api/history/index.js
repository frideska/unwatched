const router = require('express').Router()

const models = require('../../../pgdb/db/models')
const UserHistory = models.UserHistory
const SeriesController = require('../../../pgdb/db/controllers/SeriesController')
const MovieController = require('../../../pgdb/db/controllers/MovieController')
const tmdbWrapper = require('../../../tmdb/')

/**
 * Route for getting the 10 latest history Objects attriuted to the logged in user.
 */
router.get('/', async (req, res) => {
  try {
    const size = 10
    const page = req.query.page || 1
    const offset = ((page - 1) * size)
    let history = await UserHistory.findAll({
      where: {
        UserId: req.user.id
      },
      include: ['Series', 'Movie'],
      order: [
        [models.Movie, 'title', 'ASC'],
        [models.Series, 'title', 'ASC']
      ],
      limit: size,
      offset: offset
    })
    res.json(history)
  } catch (err) {
    console.error(err)
  }
})

/**
 * Route for creating a history Object in the database.
 * @param req.body.history String of the history Object to be created.
 */
router.post('/', async (req, res) => {
  try {
    let history = { UserId: req.user.id }

    if (req.body.history.type === 'movie') {
      const movie = await tmdbWrapper.details.movie(req.body.history.id)
      const dbMovie = await MovieController.create(movie)
      history.MovieId = dbMovie.id
    } else if (req.body.history.type === 'tv') {
      const series = await tmdbWrapper.details.tv(req.body.history.id)
      const dbSeries = await SeriesController.create(series)
      history.SeriesId = dbSeries.id
    } else {
      throw new Error('TMDB API media_type not valid')
    }

    await UserHistory.create(history)
    res.send()
  } catch (err) {
    console.error(err)
  }
})

/**
 * Route for deleting a history Object in the database.
 * @param req.body.history String of the history Object to be deleted.
 */
router.delete('/', async (req, res) => {
  await UserHistory.findOneAndRemove({
    user_id: req.user._id,
    content: req.body.history
  })
  res.send()
})

module.exports = router
