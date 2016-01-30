import Promise from 'bluebird'
import db from '../db'
import { updateStringObject } from '../../middleware/utils'
import nodemailer from 'nodemailer'
import { isEmpty } from 'lodash'
require('dotenv').config()

// using node mailer to send email notifications when a user
// first signs up
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_ACCOUNT,
    pass: process.env.GMAIL_PWD
  }
})

export default {
  // this function is used in passport to create a user in our db when they signup with fb
  // createFacebookUser: (profile) => {
  //   return new Promise((resolve, reject) => {
  //     db.saveAsync({
  //       name: profile.displayName,
  //       facebookId: parseInt(profile.id),
  //       trippian: false,
  //       email: profile.emails[0].value,
  //       picture: `https://graph.facebook.com/${profile.id}/picture?height=500`,
  //       totalRating: 0,
  //       numberOfReviews: 0,
  //       averageRating: 0
  //     }, 'User')
  //       .then((createdUser) => {
  //         if (createdUser) {
  //           resolve(createdUser)
  //         } else {
  //           reject(new Error('user could not be created'))
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error)
  //       })
  //   })
  // },
  // createGoogleUser: profile => {
  //   console.log(profile)
  //   return new Promise((resolve, reject) => {
  //     db.saveAsync({

  //     }, 'User')
  //       .then(createdUser => {
  //         if (createdUser.length) {
  //           resolve(createdUser)
  //         } else {
  //           reject(new Error('google user could not be created'))
  //         }
  //       })
  //       .catch(error => {
  //         console.error(error)
  //       })
  //   })
  // },
  createUser: (details) => {
    details.totalRating = 0
    details.numberOfReviews = 0
    details.averageRating = 0
    details.trippian = false
    return new Promise((resolve, reject) => {
      db.saveAsync(details, 'User')
        .then(createdUser => {
          // creating our mail options
          let mailOptions = {
            from: 'Trippian <trippianApp@gmail.com',
            to: details.email,
            subject: 'Welcome to Trippian',
            text: `Welcome ${details.name}`,
            html: `<h2>Welcome ${details.name}</h2> <p>You can now plan your trips all over the world!</p>`
          }
          // sending the email using nodemailer
          transporter.sendMail(mailOptions, function(err, info) {
            if (err) {
              console.error(err)
            } else {
              resolve(createdUser)
            }
          })
        })
    })
    .catch(error => {
      console.error(error)
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
  // gets back all users so the admin user can see all the users
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
  // function for deleting users given the userId
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
  },
  getUserSavedTrips: (userId) => {
    return new Promise((resolve, reject) => {
      let cypher = `match (u:User)-[s:SAVED]->(t:Trip) where id(u)=${userId} return t;`
      db.queryAsync(cypher)
        .then(savedTrips => {
          resolve(savedTrips)
        })
        .catch(error => {
          console.error(error)
        })
    })
  },
  userSaveTrip: (userId, tripId) => {
    return new Promise((resolve, reject) => {
      db.relationshipsAsync(userId, 'out', 'SAVED')
        .then(saved => {
          if (!saved.length) {
            db.relateAsync(userId, 'SAVED', tripId, {
              savedAt: new Date()
            })
              .then(savedRelationship => {
                console.log(savedRelationship)
                if (!isEmpty(savedRelationship)) {
                  resolve(savedRelationship)
                } else {
                  reject(new Error ('could not save this trip to that user'))
                }
              })
              .catch(error => {
                console.error(error)
              })
          } else {
            reject(new Error('user has already saved this trip'))
          }
        })
        .catch(error => {
          console.error(error)
        })
    })
  }
}
