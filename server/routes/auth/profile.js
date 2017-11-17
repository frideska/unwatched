const router = require('express').Router()

const User = require('../../db/models/User')

router.get('/', (req, res) => {
  res.json({user: req.user || undefined})
})

router.delete('/', async (req, res) => {
  try {
    let user = await User.findById(req.user._id)
    await user.remove()
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
