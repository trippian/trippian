const passport = require('passport');
const User = require('../db/models/user');

module.exports = {
  facebook: passport.authenticate('facebook'),
  facebookCallback: passport.authenticate('facebook', failureRedirect: '/'),

  logout: function(req, res) {

  },
  // function that validates whether the user is logged in
  
  validate: function(req, res) {

  }
}