import auth from '../controllers/auth'

export default function(router) {
  // router.get('/facebook', passport.authenticate('facebook', {
  //   scope: ['email']
  // }))
  
  router.post('/signup', auth.signup, auth.createCookie)

  router.post('/login', auth.login, auth.createCookie)
  
  router.get('/facebook', auth.facebook)

  // router.get('/facebook/callback', passport.authenticate('facebook', {
  //   successRedirect: '/',
  //   failureRedirect: '/'
  // }), function(req ,res) {
  //   console.log('hi')
  //   res.cookie('trippian', {
  //     id: req.user.id,
  //     name: req.user.name
  //   })
  // })
  router.get('/facebook/callback', auth.facebookCallback, auth.validateFacebook)

  // router.get('/google', passport.authenticate('google', {
  //   scope: ['profile', 'email']
  // }))

  // router.get('/google/callback', passport.authenticate('google', {
  //   successRedirect: '/',
  //   failureRedirect: '/'
  // }), function(req ,res) {
  //   console.log('hi')
  //   res.cookie('trippian', {
  //     id: req.user.id,
  //     name: req.user.name
  //   })
  // })

  router.get('/google', auth.google)
  router.get('/google/callback', auth.googleCallback, auth.validateGoogle)

  router.get('/logout', auth.logout)
}