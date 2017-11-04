const router = require('express').Router()
const request = require('request')

router.post('/', function (req, res) {
  console.log(req.body.id)
})

module.exports = router
