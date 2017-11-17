const route = require('express').Router()

const movie = require('./movie')
const multi = require('./multi')
const tv = require('./tv')

route.use('/movie', movie)
route.use('/multi', multi)
route.use('/tv', tv)

module.exports = route
