const route = require('express').Router()

const discover = require('./discover')
const find = require('./find')
const search = require('./search')

route.use('/discover', discover)
route.use('/find', find)
route.use('/search', search)

module.exports = route
