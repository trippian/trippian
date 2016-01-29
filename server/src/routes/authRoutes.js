import passport from 'passport'
import auth from '../controllers/auth'

export default function(router) {
  router.get('/facebook', passport.authenticate('facebook', {
    scope: ['email']
  }))

  router.get('/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/'
  }), function(req ,res) {
    console.log('hi')
    res.cookie('trippian', {
      id: req.user.id,
      name: req.user.name
    })
  })

  router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }))

  router.get('/google/callback', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/'
  }), function(req ,res) {
    console.log('hi')
    res.cookie('trippian', {
      id: req.user.id,
      name: req.user.name
    })
  })

  router.get('/logout', auth.logout)
}