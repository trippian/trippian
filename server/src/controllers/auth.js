import passport from 'passport'
import User from '../db/models/user'

export default {

  logout: function (req, res) {
    req.logout()
    res.clearCookie('trippianPass')
    res.redirect('/')
  },

  // function that validates whether the user is logged in
  isLoggedIn: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.sendStatus(401)
  },

  createCookie: (req, res) => {
    req.session.email = req.user.email

    res.cookie('trippianPass', {
      id: req.user.id,
      email: req.user.email,
      isAdmin: req.user.isAdmin,
      isTrippian: req.user.isTrippian
    })
    res.redirect('/#/login/success')
  },

  validateGoogle: (req, res, next) => {
    req.session.name = req.user.displayName

    // making google id into a string because neo4j can't have 
    // very large integers
    let googleId = req.user.id
    req.session.googleId = googleId
    req.session.picture = req.user._json.image.url
    req.session.email = req.user.emails[0].value

    User.getUserByParameter('googleId', `str("${googleId}")`)
      .then(user => {
        if (!user) {
          User.createUser({
            googleId: `"${googleId}"`,
            name: req.user.displayName,
            email: req.user.emails[0].value,
            picture: req.user._json.image.url
          })
            .then(newUser => {
              res.cookie('trippianPass', {
                googleId: parseInt(googleId),
                id: newUser.id,
                name: req.user.displayName,
                email: req.user.emails[0].value,
                picture: req.user._json.image.url,
                isAdmin: newUser.isAdmin,
                isTrippian: newUser.isTrippian
              })
              res.redirect('/#/login/success')
            })
        } else {
          res.cookie('trippianPass', {
            googleId,
            id: user.id,
            displayName: req.user.displayName,
            email: req.user.emails[0].value,
            picture: req.user._json.image.url,
            isAdmin: user.isAdmin,
            isTrippian: user.isTrippian
          })
          res.redirect('/#/login/success')
        }
      })
  },

  validateFacebook: (req, res, next) => {
    req.session.name = req.user.displayName
    req.session.facebookId = req.user.id
    req.session.picture = `https://graph.facebook.com/${req.user.id}/picture?height=500`
    req.session.email = req.user.emails[0].value

    User.getUserByParameter('facebookId', req.user.id)
      .then(user => {
        if (!user) {
          User.createUser({
            facebookId: parseInt(req.user.id),
            name: req.user.displayName,
            email: req.user.emails[0].value,
            picture: `https://graph.facebook.com/${req.user.id}/picture?height=500`,
            gender: req.user.gender,
            timezone: req.user._json.timezone
          })
            .then(newUser => {
              res.cookie('trippianPass', {
                facebookId: req.user.id,
                id: newUser.id,
                displayName: req.user.displayName,
                email: req.user.emails[0].value,
                picture: `https://graph.facebook.com/${req.user.id}/picture?height=500`,
                isAdmin: newUser.isAdmin,
                isTrippian: newUser.isTrippian
              })
              res.redirect('/#/login/success')
            })
        } else {
          res.cookie('trippianPass', {
            facebookId: req.user.id,
            id: user.id,
            displayName: req.user.displayName,
            email: req.user.emails[0].value,
            picture: `https://graph.facebook.com/${req.user.id}/picture?height=500`,
            isAdmin: user.isAdmin,
            isTrippian: user.isTrippian
          })
          res.redirect('/#/login/success')
        }
      })
  },
  signup: passport.authenticate('local-signup', {
    // successRedirect: '/#/login/success',
    failureRedirect: '/#/login',
    failureFlash: true
  }),

  login: passport.authenticate('local-login', {
    // successRedirect: '/#/login/success',
    failureRedirect: '/#/login',
    failureFlash: true
  }),

  facebook: passport.authenticate('facebook', {
    scope: ['email']
  }),

  facebookCallback: passport.authenticate('facebook', {
    failureRedirect: '/'
  }),

  google: passport.authenticate('google', {
    scope: ['profile', 'email']
  }),

  googleCallback: passport.authenticate('google', {
    failureRedirect: '/login'
  })
}
