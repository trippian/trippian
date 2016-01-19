const Promise = require('bluebird');
const _ = require('lodash');
const db = require('../db');

module.exports = {
  createUser: function(username) {
    
  },
  getUserById: function(id) {
    return new Promise(function(resolve) {
      let cypher = 'match (user:User) where user.facebookId=' + id + ' return user';
      db.queryAsync(cypher)
        .then(function(user) {
          if (user) {
            resolve(user);
          } reject('user does not exist');
        });
    });
  },
  // gets a user when searching by a certain parameter ie. field would equal facebookId and value would be the id
  getUserByParameter: function(field, value) {
    return new Promise(function(resolve, reject) {
      let cypher = 'match (user:User) where ' + field + '=' + value + ' return user';
      db.queryAsync(cypher)
        .then(function(user) {
          if (user) {
            resolve(user);
          } reject('user does not exist with that value');
        });
    });
  },


}