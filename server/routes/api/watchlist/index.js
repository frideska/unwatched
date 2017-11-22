const router = require('express').Router()
const express = require('../../../express')

router.use(express.loggedIn)

router.use('/movie', require('./movie'))
router.use('/tv', require('./tv'))

module.exports = router
