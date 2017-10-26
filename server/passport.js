const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

let User = require('./db/models/User')

/**
 * Google OAuth2 configuration options.
 * KEY and SECRET are fetched from environment variables exclusively.
 */
const config = {
    clientID: process.env.P4_AUTH_GOOGLE_KEY || '',
    clientSecret: process.env.P4_AUTH_GOOGLE_SECRET || '',
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
        let user = await User.findOne({ 'google.id': profile.id })
        if (user) {
            return done(null, user)
        } else {
            var newUser = new User()
            newUser.google.id = profile.id
            newUser.google.token = token
            newUser.google.name = profile.displayName
            try {
                await newUser.save()
                return done(null, newUser)
            } catch (err) {
                throw err
            }
        }
    } catch (err) {
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
            let user = await User.findById(id)
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
