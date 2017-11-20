const GoogleStrategy = require('passport-google-oauth20').Strategy

const misc = require('./misc')
// let User = require('./db/models/User')
// let UserController = require('./db/controllers/UserController')

const UserController = require('./pgdb/db/controllers/UserController')
const User = require('./pgdb/db/models').User

/**
 * Google OAuth2 configuration options.
 * KEY and SECRET are fetched from environment variables exclusively.
 */
const config = {
  clientID: process.env.P4_AUTH_GOOGLE_KEY ? process.env.P4_AUTH_GOOGLE_KEY : misc.missing('P4_AUTH_GOOGLE_KEY'),
  clientSecret: process.env.P4_AUTH_GOOGLE_SECRET ? process.env.P4_AUTH_GOOGLE_SECRET : misc.missing('P4_AUTH_GOOGLE_SECRET'),
  callbackURL: process.env.P4_AUTH_GOOGLE_CALLBACK || 'http://localhost:8000/auth/google-callback'
}

/**
 * Google login function. Takes input from Passport Google Authentication.
 * Tries to find user in database, if user exists, return user.
 * If user doesn't exist, create the user based on google info and return created user.
 * @param {String} token Google OAuth2 token.
 * @param {*} refreshToken
 * @param {Object} profile Google profile object, containing user information.
 * @param {function} done Passport callback.
 */
const login = async (token, refreshToken, profile, done) => {
  try {
    let user = {
      id: profile.id,
      token: token,
      name: profile.displayName,
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      image: profile.photos[0].value,
      email: profile.emails[0].value
    }
    let dbUser = await UserController.getById(user.id)
    if (!dbUser) {
      dbUser = await UserController.createUser(user)
    }
    done(null, dbUser)
  } catch (err) {
    console.error(err)
    return done(err)
  }
}

module.exports = (passport) => {
  /**
     * Passport function for serializing user.
     */
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  /**
     * Passport function for deserializing user.
     */
  passport.deserializeUser(async (id, done) => {
    try {
      console.log(id)
      let user = await UserController.getById(id)
      done(null, user)
    } catch (err) {
      done(err)
    }
  })
  /**
     * Configure Passport to use Google OAuth2 Strategy.
     */
  passport.use(new GoogleStrategy(config, login))
}
