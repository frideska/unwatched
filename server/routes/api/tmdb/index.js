const route = require('express').Router()

const discover = require('./discover')
const find = require('./find')
const search = require('./search')
const movie = require('./movie')

route.use('/discover', discover)
route.use('/find', find)
route.use('/search', search)
route.use('/movie', movie)

module.exports = route
