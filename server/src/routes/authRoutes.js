import passport from 'passport'
import auth from '../controllers/auth'

export default function(router) {
  router.get('/facebook', passport.authenticate('facebook', {
    scope: ['email']
  }))

  router.get('/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/'
  }), auth.validate)

  router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }))

  router.get('/google/callback', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/'
  }), auth.validate)

  router.get('/logout', auth.logout)
}