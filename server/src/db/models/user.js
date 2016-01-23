import Promise from 'bluebird'
import _ from 'lodash'
import db from '../db'
import { updateStringObject } from '../../middleware/utils'

export default {
  // this function is used in passport to create a user in our db when they signup with fb
  createUser: function (profile) {
    return new Promise(function (resolve) {
      db.saveAsync({
        name: profile.displayName,
        facebookId: parseInt(profile.id),
        trippian: false,
        email: profile.emails[0].value,
        picture: 'graph.facebook.com/' + profile.id + '/picture?height=500'
      }, 'User')
        .then(function (createdUser) {
          if (createdUser) {
            resolve(createdUser)
          }
        })
    })
  },
  // need to work on this function to change all fields that are sent
  becomeTrippian: function (userId, field) {
    return new Promise(function (resolve) {
      let cypher = `match (u:User) where id(u)=${userId} set u.trippian=true return u`
      db.queryAsync(cypher)
        .then(function (updatedUser) {
          if (updatedUser) {
            resolve(updatedUser)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  updateUser: (userId, details) => {
    let updateString = updateStringObject(details, '')

    return new Promise((resolve) => {
      let cypher = `match (u:User) where id(u)=${userId} SET u += {${updateString}} return u;`
      db.queryAsync(cypher)
        .then((updatedUser) => {
          if (updatedUser.length) {
            resolve(updatedUser[0])
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  getUserById: (userId) => {
    return new Promise((resolve) => {
      let cypher = `match (u:User) where id(u)=${userId} return u;`
      db.queryAsync(cypher)
        .then((user) => {
          if (user.length) {
            resolve(user[0])
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  // gets a user when searching by a certain parameter ie. field would equal facebookId and value would be the id
  getUserByParameter: (field, value) => {
    return new Promise((resolve) => {
      let cypher = `match (u:User) where user.${field}=${value} return u;`
      db.queryAsync(cypher)
        .then((user) => {
          resolve(user)
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  getUserPostedTrips: (userId) => {
    return new Promise((resolve) => {
      let cypher = `match (u:User)-[r:POSTED]->(t:Trip) where id(u)=${userId} return t;`
      db.queryAsync(cypher)
        .then((trips) => {
          if (trips.length) {
            resolve(trips)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  // currently returns all users who are trippians but we need to fix to order by popularity
  getPopularTrippians: () => {
    return new Promise((resolve) => {
      let cypher = 'match(user:User) where user.trippian=true return user'
      db.queryAsync(cypher)
        .then((trippians) => {
          if (trippians) {
            resolve(trippians)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  deleteUser: (userId) => {
    return new Promise((resolve) => {
      let cypher = `match (u:User) where id(u)=${userId} detach delete u;`
      db.queryAsync(cypher)
        .then((deleted) => {
          resolve(deleted)
        })
        .catch((error) => {
          console.error(error)
        })
    })
  }
}
