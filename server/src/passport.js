const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('./db/modles/user');
const config = require('./config');

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    // after we write user model, we will search for that user node
  });

  passport.use(new FacebookStrategy({
    clientID: config.FACEBOOK_APP_ID,
    clientSecret: config.FACEBOOK_APP_SECRET,
    callbackURL: config.FACEBOOK_CALLBACK_URL
  },
  function(token, refreshToken, profile, done) {
    process.nextTick(function() {
      // find user node in database based on their facebookID
    })
  }
  ));
}
