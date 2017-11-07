
/**
 * Server root file for Project 4
 */

/**
 * Get external dependencies
 */
const express = require('express')
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')
const session = require('express-session')
const path = require('path')
const passport = require('passport')
const tmdb = require('tmdbapi')


/**
 * Get local dependencies
 */

const models = require('./db')
const routes = require('./routes')

/**
 * Define constants
 */


const PORT = process.env.P4_PORT || 8000
const HOST = process.env.P4_HOST || '0.0.0.0'
const LOG_LEVEL = process.env.P4_LOG_LEVEL || 'debug'
const ENV = process.env.P4_ENV || 'development'
const SECRET = process.env.P4_SECRET || 'MagicalNarwhalsAndPinkOrcasDancingTogetherInImaginationLand'
const TMDB_TOKEN = process.env.P4_TMDB_TOKEN || ''

/**
 * Initial server setup
 */

const app = express()

var sess = {
    secret: SECRET,
    cookie: {}
}

if (ENV === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
}

global.tmdb = new tmdb({
    apiv3: TMDB_TOKEN
})

app.use(session(sess))

app.set('view options', { pretty: true })
app.set('json spaces', 2)


app.use(cookieparser())
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use(express.static('public'))
require('./passport')(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use('/', routes)

//const db = require('./db')


let server = app.listen(PORT, HOST, () => console.log(`Project server running on: '${HOST}:${PORT}'`))
