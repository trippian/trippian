import facebook from 'passport-facebook'
import google from 'passport-google-oauth'
import User from './db/models/user'
const FacebookStrategy = facebook.Strategy
const GoogleStrategy = google.OAuth2Strategy
require('dotenv').config()

export default function (app, passport) {
  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    // after we write user model, we will search for that user node
    User.getUserById(id)
      .then(user => {
        done(null, user)
      })
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
              console.log('user already exists as ', user)
            } else {
              User.createUser({
                name: profile.displayName,
                facebookToken: token,
                facebookId: parseInt(profile.id),
                email: profile.emails[0].value,
                picture: `https://graph.facebook.com/${profile.id}/picture?height=500`
              }, 'User')
              .then(function(newUser) {
                console.log('newUser has been created', newUser)
              })
            }
          })
        return done(null, profile)
      })
    }
  ))

  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_APP_ID,
    clientSecret: process.env.GOOGLE_APP_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  }, 
    (token, refreshToken, profile, done) => {
      process.nextTick(() => {
        User.getUserByParameter('googleId', profile.id)
          .then(user => {
            if (user.length) {
              console.log('user exists as: ', user)
            } else {
              User.createUser({
                googleId: profile.id,
                googleToken: token,
                name: profile.displayName,
                email: profile.emails[0].value
              })
              .then(createdUser => {
                console.log('a new user has been created: ', createdUser)
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
