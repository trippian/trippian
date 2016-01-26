import Promise from 'bluebird'
import db from '../db'
import { updateStringObject } from '../../middleware/utils'

export default {
  createRating: (raterId, userId, details) => {
    return new Promise((resolve, reject) => {
      db.relationshipsAsync(raterId, 'all', 'TOURED')
        .then((toured) => {
          if (toured.length) {
            let updateString = updateStringObject(details, '')
            let cypher = `match (rater:User), (u:User) where id(rater)=${raterId} and id(u)=${userId} create (rater)-[r:RATED]->(u) set r += {${updateString}} return r;`
            db.queryAsync(cypher)
              .then((rating) => {
                if (rating.length) {
                  resolve(rating)
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
      let cypher = `match(u:User)<-[r:RATED]-() where id(u)=${userId} return r, avg(r.rating);`
      db.queryAsync(cypher)
        .then((ratings) => {
          if (ratings.length) {
            resolve(ratings)
          } else {
            // reject(new Error('User has no ratings'))
            resolve(ratings)
          }
        })
    })
  }
}