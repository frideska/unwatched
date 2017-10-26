
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

const projectName = `
  __                _           _                                  __  
 / /_ __  _ __ ___ (_) ___  ___| |_      _ __   __ _ _ __ ___   ___\\ \\ 
/ /| '_ \\| '__/ _ \\| |/ _ \\/ __| __|____| '_ \\ / _  | '_   _ \\ / _ \\  \\
\\ \\| |_) | | | (_) | |  __/ (__| ||_____| | | | (_| | | | | | |  __// /
 \\_\\ .__/|_|  \\___// |\\___|\\___|\\__|    |_| |_|\\__,_|_| |_| |_|\\___/_/ 
   |_|           |__/                                                  
`

console.log(projectName)

console.log(process.env.container)
console.log(process.env.CONTAINER)

let server = app.listen(PORT, HOST, () => console.log(`Project server running on: '${HOST}:${PORT}'`))
