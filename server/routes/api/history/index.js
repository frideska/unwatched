const router = require('express').Router()

const UserHistory = require('../../../pgdb/db/models').UserHistory

/**
 * Route for getting the 10 latest history Objects attriuted to the logged in user.
 */
router.get('/', async (req, res) => {
  try {
    let history = await UserHistory.find({ where: { UserId: req.user.id } })
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
    console.log(req.body.history)
    await UserHistory.create({
      UserId: req.user.id,
      MovieId: req.body.history.id,
      SeriesId: req.body.history.id
    })
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
