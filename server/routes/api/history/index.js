const router = require('express').Router()

const UserHistory = require('../../../db/models/UserHistory')

/**
 * Route for getting the 10 latest history Objects attriuted to the logged in user.
 */
router.get('/', async (req, res) => {
  let history = await UserHistory.find({ user_id: req.user._id }).limit(10).exec()
  res.json(history)
})

/**
 * Route for creating a history Object in the database.
 * @param req.body.history String of the history Object to be created.
 */
router.post('/', async (req, res) => {
  await UserHistory.create({
    user_id: req.user._id,
    content: req.body.history
  })
  res.send()
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
