const route = require('express').Router()

const discover = require('./discover')
const find = require('./find')
const search = require('./search')
const details = require('./details')

route.use('/discover', discover)
route.use('/details', details)
route.use('/find', find)
route.use('/search', search)

module.exports = route
