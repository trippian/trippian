import auth from '../controllers/auth'

export default function(router) {
  
  router.post('/signup', auth.signup, auth.createCookie)

  router.post('/login', auth.login, auth.createCookie)
  
  router.get('/facebook', auth.facebook)

  router.get('/facebook/callback', auth.facebookCallback, auth.validateFacebook)

  router.get('/google', auth.google)
  router.get('/google/callback', auth.googleCallback, auth.validateGoogle)

  router.get('/logout', auth.logout)
}