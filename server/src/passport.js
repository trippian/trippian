const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('./db/models/user');
const config = require('./config');

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    // after we write user model, we will search for that user node
    done(null, user);
  });

  passport.use(new FacebookStrategy({
    clientID: config.FACEBOOK_APP_ID,
    clientSecret: config.FACEBOOK_APP_SECRET,
    callbackURL: config.FACEBOOK_CALLBACK_URL
  },
  function(token, refreshToken, profile, done) {
    process.nextTick(function() {
      // find user node in database based on their facebookID
      return done(null, profile);
    });
  }
  ));
}
