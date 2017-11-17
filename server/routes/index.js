const express = require('express')
const path = require('path')

const api = require('./api')
const auth = require('./auth')

const routes = express.Router()

routes.use('/api', api)
routes.use('/auth', auth)

/**
 * Define routes for Angular
 */
routes.get('/inline.bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/inline.bundle.js'))
})
routes.get('/styles.bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/styles.bundle.js'))
})
routes.get('/scripts.bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/scripts.bundle.js'))
})
routes.get('/polyfills.bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/polyfills.bundle.js'))
})
routes.get('/vendor.bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/vendor.bundle.js'))
})
routes.get('/main.bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/main.bundle.js'))
})
routes.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'))
})

module.exports = routes
