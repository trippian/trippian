import Promise from 'bluebird'
import db from '../db'
import { updateStringObject } from '../../middleware/utils'

export default {
  createRating: (raterId, userId, details) => {
    return new Promise((resolve) => {
      let cypher = `match (r:User)-[t:TRIPPED_WITH]->(u:User) where id(r)=${raterId} and id(u)=${userId} return t;`
      db.queryAsync(cypher)
        .then((trippedWith) => {
          if (trippedWith.length) {
            let updateString = updateStringObject(details, '')
            let cypher = `match (r:User), (u:User) where id(r)=${raterId} and id(r)=${userId} create (r)-[rating:RATED]->(u) on create set rating += {${updateString}} return rating;`
            db.queryAsync(cypher)
              .then((rating) => {
                if (rating.length) {
                  resolve(rating)
                }
              })
              .catch((error) => {
                console.error(error)
              })
          } else { resolve(new Error('User has not been on trip with this trippian')) }
        })
        .catch((error) => {
          console.error(error)
        })
      
    })
  }
}