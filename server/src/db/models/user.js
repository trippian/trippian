import Promise from 'bluebird'
import db from '../db'
import { updateStringObject } from '../../middleware/utils'

export default {
  // this function is used in passport to create a user in our db when they signup with fb
  createUser: (profile) => {
    return new Promise((resolve, reject) => {
      db.saveAsync({
        name: profile.displayName,
        facebookId: parseInt(profile.id),
        trippian: false,
        email: profile.emails[0].value,
        picture: 'https://graph.facebook.com/' + profile.id + '/picture?height=500',
        totalRating: 0,
        numberOfReviews: 0,
        averageRating: 0
      }, 'User')
        .then((createdUser) => {
          if (createdUser) {
            resolve(createdUser)
          } else {
            reject(new Error('user could not be created'))
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  // need to work on this function to change all fields that are sent
  becomeTrippian: (userId) => {
    return new Promise((resolve, reject) => {
      let cypher = `match (u:User) where id(u)=${userId} SET u.trippian = true return u`
      db.queryAsync(cypher)
        .then((updatedUser) => {
          if (updatedUser) {
            resolve(updatedUser)
          } else {
            reject(new Error('user could not become trippian'))
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  updateUser: (userId, details) => {
    let updateString = updateStringObject(details, '')

    return new Promise((resolve, reject) => {
      let cypher = `match (u:User) where id(u)=${userId} SET u += {${updateString}} return u;`
      db.queryAsync(cypher)
        .then((updatedUser) => {
          if (updatedUser.length) {
            resolve(updatedUser[0])
          } else {
            reject(new Error('could not update user'))
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  getUserById: (userId) => {
    return new Promise((resolve, reject) => {
      let cypher = `match (u:User) where id(u)=${userId} return u;`
      db.queryAsync(cypher)
        .then((user) => {
          if (user.length) {
            resolve(user[0])
          } else {
            reject(new Error('could not get user by id'))
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  // gets a user when searching by a certain parameter ie. field would equal facebookId and value would be the id
  getUserByParameter: (field, value) => {
    return new Promise((resolve, reject) => {
      let cypher = `match (u:User) where u.${field}=${value} return u;`
      db.queryAsync(cypher)
        .then((user) => {
          if (user) {
            resolve(user)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  getUserPostedTrips: (userId) => {
    return new Promise((resolve, reject) => {
      let cypher = `match (u:User)-[r:POSTED]->(t:Trip) where id(u)=${userId} return t;`
      db.queryAsync(cypher)
        .then((trips) => {
          if (trips.length) {
            resolve(trips)
          } else {
            // reject(new Error('could not find trips for that user'))
            resolve(trips)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  // currently returns all users who are trippians but we need to fix to order by popularity
  getAllTrippians: () => {
    return new Promise((resolve, reject) => {
      let cypher = `match (u:User) where u.trippian=true return u`
      db.queryAsync(cypher)
        .then((trippians) => {
          if (trippians) {
            resolve(trippians)
          } else {
            reject(new Error('could not get trippians'))
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  getPopularTrippians: () => {
    return new Promise((resolve, reject) => {
      // uses algorithm to search for the most popular trippians
      // denominator inside the exp function is 10, but if we 
      // want to give more weight to quantity of votes, then
      // we should increase that value
      let cypher = `match (u:User) where u.trippian=true return u order by  ((u.averageRating/2) + 5*(1 - exp(-(u.totalRating/10)))) DESC LIMIT 10`
      db.queryAsync(cypher)
        .then(trippians => {
          if (trippians.length) {
            resolve(trippians)
          }
        })
    })
  },
  getAllUsers: () => {
    return new Promise((resolve, reject) => {
      let cypher = `match (u:User) return u`
      db.queryAsync(cypher)
        .then(users => {
          if (users.length) {
            resolve(users)
          }
        })
        .catch(error => {
          console.error(error)
        })
    })
  },
  deleteUser: (userId) => {
    return new Promise((resolve, reject) => {
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
