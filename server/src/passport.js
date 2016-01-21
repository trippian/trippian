import facebook from 'passport-facebook'
import User from './db/models/user'
const FacebookStrategy = facebook.Strategy
require('dotenv').config()

export default function (passport) {
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
      profileFields: ['emails', 'picture']
    },
    function (token, refreshToken, profile, done) {
      process.nextTick(function () {
        // find user node in database based on their facebookID
        // console.log(profile, 'passports.js line 24')
        User.createUser(profile)
        return done(null, profile)
      })
    }
  ))
}
