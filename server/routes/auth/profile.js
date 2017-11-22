const router = require('express').Router()

const UserController = require('../../pgdb/db/controllers/UserController')

router.get('/', (req, res) => {
  res.json({user: req.user || undefined})
})

router.delete('/', async (req, res) => {
  try {
    await UserController.deleteUser(req.user.id)
    res.send()
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
