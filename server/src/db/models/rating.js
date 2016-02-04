import Promise from 'bluebird'
import db from '../db'
import { updateStringObject } from '../../middleware/utils'

export default {
  createRating: (raterId, userId, details) => {
    details.createdAt = Date()
    return new Promise((resolve, reject) => {
      db.relationshipsAsync(raterId, 'all', 'TOURED')
        .then((toured) => {
          if (toured.length) {
            let updateString = updateStringObject(details, '')
            let cypher = `match (rater:User), (u:User) where id(rater)=${raterId} and id(u)=${userId} create (rater)-[r:RATED]->(u) set r += {${updateString}} return r;`
            db.queryAsync(cypher)
              .then((rating) => {
                if (rating.length) {
                  rating.userId = userId
                  // resolve(rating)
                  let cypher = `match (u:User) where id(u)=${userId} set u.totalRating = u.totalRating + ${details.rating}, u.numberOfReviews = u.numberOfReviews + 1, u.averageRating = u.totalRating/u.numberOfReviews return u;`
                  db.queryAsync(cypher)
                    .then(updatedUser => {
                      if (updatedUser.length) {
                        resolve(rating[0])
                      } else {
                        reject(new Error('User could not be updated'))
                      }
                    })
                    .catch(error => {
                      console.error(error)
                    })
                } else {
                  reject(new Error('Rating could not be created'))
                }
              })
              .catch((error) => {
                console.error(error)
              })
          } else { 
            reject(new Error('User has not been on trip with this trippian')) 
          }
        })
        .catch((error) => {
          console.error(error)
        })
      
    })
  },
  getAllUserRatings: (userId) => {
    return new Promise((resolve, reject) => {
      let cypher = `match (u:User)<-[r:RATED]-() where id(u)=${userId} return r;`
      db.queryAsync(cypher)
        .then((ratings) => {
          resolve(ratings)
        })
    })
  },
  deleteRating: (ratingId) => {
    return new Promise((resolve, reject) => {
      let cypher = `match ()-[r:RATED]->() where id(r)=${ratingId} delete r;`
      db.queryAsync(cypher)
        .then(deleted => {
          resolve(deleted)
        })
        .catch(error => {
          console.error(error)
        })
    })
  }
}