export default function(router, passport) {
  router.get('/facebook', passport.authenticate('facebook', {
    scope: ['email']
  }))

  router.get('/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/'
  }))

  router.get('/google', passport.authenticate('google', {
    scope: 'https://www.google.com/m8/feeds'
  }))

  router.get('/google/callback', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/'
  }))
}