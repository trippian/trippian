import Promise from 'bluebird'
import db from '../db'
import { updateStringObject } from '../../middleware/utils'

export default {
  createRating: (raterId, userId, details) => {
    return new Promise((resolve) => {
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
            resolve(new Error('User has not been on trip with this trippian')) 
          }
        })
        .catch((error) => {
          console.error(error)
        })
      
    })
  },
  getAllUserRatings: (userId) => {
    return new Promise((resolve) => {
      let cypher = `match(u:User)<-[r:RATED]-() where id(u)=${userId} return r;`
      db.queryAsync(cypher)
        .then((ratings) => {
          if (ratings.length) {
            resolve(ratings)
          } else {
            resolve(new Error('User has no ratings'))
          }
        })
    })
  }
}