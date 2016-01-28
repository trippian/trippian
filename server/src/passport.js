import facebook from 'passport-facebook'
import User from './db/models/user'
const FacebookStrategy = facebook.Strategy
require('dotenv').config()

export default function (app, passport) {
  passport.serializeUser(function (user, done) {
    done(null, user)
  })

  passport.deserializeUser(function (user, done) {
    // after we write user model, we will search for that user node
    done(null, user)
  })

  passport.use(new FacebookStrategy({
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL,
      profileFields: ['id', 'displayName', 'emails', 'photos']
    },
    function (token, refreshToken, profile, done) {
      process.nextTick(function () {
        // find user node in database based on their facebookID
        User.getUserByParameter('facebookId',profile.id)
          .then(function(user) {
            if(user.length) {
              console.log('user exists as ', user)
            } else {
              console.log(user)
              User.createFacebookUser(profile)
              .then(function(newUser) {
                console.log('newUser has been created', newUser)
              })
            }
          })
        return done(null, profile)
      })
    }
  ))

  app.use(passport.initialize())
  app.use(passport.session())
}
