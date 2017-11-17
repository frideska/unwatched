const passport = require('passport')
const router = require('express').Router()

const profile = require('./profile')

router.use('/profile', profile)

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)

router.get('/google-callback', passport.authenticate('google', {
  successRedirect: '/user/',
  failureRedirect: '/'
}))

module.exports = router
