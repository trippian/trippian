import Promise from 'bluebird'
import db from '../db'
import _ from 'lodash'
import { updateStringObject } from '../../middleware/utils'

export default {
  createDestination: (details) => {
    return new Promise((resolve) => {
      // let cypher = 'match (destination:Destination';
      db.saveAsync(details, 'Destination')
        .then((destination) => {
          if (destination) {
            resolve(destination)
          } 
        })
        .catch((err) => {
          console.error(err)
        })
    })
  },
  updateDestination: (details, destinationId) => {
    // _.forEach(details, function(val, key) {
    //   updateString += `${key}` + ': "' + `${val}` + '"'
    // })
    let updateString = updateStringObject(details, '')

    return new Promise((resolve) => {
      let cypher = `match (d:Destination) where id(d)= ${destinationId} SET d += {${updateString}} return d;`
      db.queryAsync(cypher)
        .then((updatedDestination) => {
          if (updatedDestination) {
            resolve(updatedDestination)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  getDestinationById: (destinationId) => {
    return new Promise((resolve) => {
      let cypher = `match (d:Destination) where id(d)=${destinationId} return d`
      db.queryAsync(cypher)
        .then((destination) => {
          if (destination.length) {
            resolve(destination[0])
          } 
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  getDestinationByName: (destinationName) => {
    return new Promise((resolve) => {
      let cypher = `match (d:Destination {destinationName:` + '"' + `${destinationName}` + '"' + `}) return d;`
      db.queryAsync(cypher)
        .then((destination) => {
          if (destination.length) {
            resolve(destination[0])
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  deleteDestinationById: (destinationId) => {
    return new Promise((resolve) => {
      let cypher = `match (d:Destination) where id(d)=${destinationId} delete d;`
      db.queryAsync(cypher)
        .then((deleted) => {
          if (deleted) {
            resolve(deleted)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  getAllDestinations: () => {
    return new Promise((resolve) => {
      let cypher = `match (d:Destination) return d;`
      db.queryAsync(cypher)
        .then((allDestinations) => {
          if (allDestinations) {
            resolve(allDestinations)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  getPopularDestinations: () => {
    return new Promise((resolve) => {
      let cypher = `match (d:Destination)<-[r:LOCATED_IN]-(t:Trip) return d, count(r) order by count(r)`

      db.queryAsync(cypher)
        .then((popularDestinations) => {
          console.log(popularDestinations)
          if (popularDestinations.length) {
            resolve(popularDestinations)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  }
}
