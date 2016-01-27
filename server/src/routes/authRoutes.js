export default function(router, passport) {
  router.get('/facebook', passport.authenticate('facebook', {
    scope: ['email']
  }))

  router.get('/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/'
  }))
}