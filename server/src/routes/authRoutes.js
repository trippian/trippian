export default function(app, passport) {
  app.get('/facebook', passport.authenticate('facebook', {
    scope: ['email']
  }))

  app.get('/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/'
  }))
}