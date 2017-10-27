const routes = require('express').Router()
const path = require('path')
const passport = require('passport')

const api = require('./api')
const auth = require('./auth')

routes.use('/api', api)
routes.use('/auth', auth)

module.exports = routes