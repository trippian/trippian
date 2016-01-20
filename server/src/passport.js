import facebook from 'passport-facebook'
import User from './db/models/user'
import config from '../src/config/config'
const FacebookStrategy = facebook.Strategy

export default function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user)
  })

  passport.deserializeUser(function(user, done) {
    // after we write user model, we will search for that user node
    done(null, user)
  })

  passport.use(new FacebookStrategy({
    clientID: config.FACEBOOK_APP_ID,
    clientSecret: config.FACEBOOK_APP_SECRET,
    callbackURL: config.FACEBOOK_CALLBACK_URL
  },
  function(token, refreshToken, profile, done) {
    process.nextTick(function() {
      // find user node in database based on their facebookID
      return done(null, profile)
    })
  }
  ))
}
