import Promise from 'bluebird';
import _ from 'lodash';
import db from '../db';

export default {
  createUser: function (profile) {
    // return new Promise(function (resolve) {
    //   let cypher = 'create (user:User {facebookId:' + facebookId.id + ', trippian: false, email: ' + facebookId.emails[0].value + '});'
    //   db.queryAsync(cypher)
    //     .then(function (user) {
    //       if (user) {
    //         resolve(user);
    //         console.log(user, "line 13");
    //       }
    //       reject('user could not be created');
    //     });
    // });
    // console.log(facebookId, 'profile pic user.js line 17')
    return new Promise(function (resolve) {
      db.saveAsync({
          facebookId: parseInt(profile.id),
          trippian: false,
          email: profile.emails[0].value,
          picture: 'graph.facebook.com/' + profile.id + '/picture?height=500'
        }, 'User')
        .then(function (user) {
          if (user) {
            resolve(user);
          }
        })
    })
  },
  becomeTrippian: function (id, field, value) {
    return new Promise(function (resolve) {
      let cypher = 'match (user:User) where user.facebookId=' + id + ' set user.trippian=true return n';
      db.queryAsync(cypher)
        .then(function (user) {
          if (user) {
            resolve(user);
          }
        });
    });
  },
  getUserByFacebookId: function (id) {
    return new Promise(function (resolve) {
      let cypher = 'match (user:User) where user.facebookId=' + id + ' return user';
      db.queryAsync(cypher)
        .then(function (user) {
          if (user) {
            resolve(user);
          }
        });
    });
  },
  // gets a user when searching by a certain parameter ie. field would equal facebookId and value would be the id
  getUserByParameter: function (field, value) {
    return new Promise(function (resolve) {
      let cypher = 'match (user:User) where ' + 'user.' + field + '=' + value + ' return user';
      db.queryAsync(cypher)
        .then(function (user) {
          resolve(user);
        });
    });
  },
  // currently returns all users who are trippians but we need to fix to order by popularity
  getPopularTrippians: function () {
    return new Promise(function (resolve) {
      let cypher = 'match(user:User) where user.trippian=true return user';
      db.queryAsync(cypher)
        .then(function (trippians) {
          if (trippians) {
            resolve(trippians);
          }
        });
    });
  }
}
