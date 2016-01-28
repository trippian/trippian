import passport from 'passport'

export default function(router) {
  router.get('/facebook', passport.authenticate('facebook', {
    scope: ['email']
  }))

  router.get('/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/'
  }))

  router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }))

  router.get('/google/callback', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/'
  }))
}