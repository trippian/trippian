import Promise from 'bluebird'
import db from '../db'
import { updateStringObject } from '../../middleware/utils'

export default {
  createDestination: (details) => {
    return new Promise((resolve, reject) => {
      // let cypher = 'match (destination:Destination';
      db.saveAsync(details, 'Destination')
        .then((destination) => {
          if (destination) {
            resolve(destination)
          } else {
            reject(new Error('destination could not be created'))
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

    return new Promise((resolve, reject) => {
      let cypher = `match (d:Destination) where id(d)= ${destinationId} SET d += {${updateString}} return d;`
      db.queryAsync(cypher)
        .then((updatedDestination) => {
          if (updatedDestination) {
            resolve(updatedDestination)
          } else {
            reject(new Error('could not updated destination'))
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  getDestinationById: (destinationId) => {
    return new Promise((resolve, reject) => {
      let cypher = `match (d:Destination) where id(d)=${destinationId} return d`
      db.queryAsync(cypher)
        .then((destination) => {
          if (destination.length) {
            resolve(destination[0])
          } else {
            reject(new Error('could not get destination by id'))
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  getDestinationByName: (destinationName) => {
    return new Promise((resolve, reject) => {
      let cypher = `match (d:Destination {name:` + '"' + `${destinationName}` + '"' + `}) return d;`
      db.queryAsync(cypher)
        .then((destination) => {
          resolve(destination[0])
          
          // else {
          //   reject(new Error('could not find destination'))
          // }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  deleteDestinationById: (destinationId) => {
    return new Promise((resolve, reject) => {
      let cypher = `match (d:Destination) where id(d)=${destinationId} detach delete d;`
      db.queryAsync(cypher)
        .then((deleted) => {
          if (deleted) {
            resolve(deleted)
          } else {
            reject(new Error('could not delete destination'))
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  getAllDestinations: () => {
    return new Promise((resolve, reject) => {
      let cypher = `match (d:Destination) return d;`
      db.queryAsync(cypher)
        .then((allDestinations) => {
          if (allDestinations) {
            resolve(allDestinations)
          } else {
            reject(new Error('could not get all destinations'))
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  getPopularDestinations: () => {
    return new Promise((resolve, reject) => {
      let cypher = `match (d:Destination)<-[r:LOCATED_IN]-(t:Trip) return d, count(r) order by count(r) DESC`

      db.queryAsync(cypher)
        .then((popularDestinations) => {
          if (popularDestinations.length) {
            resolve(popularDestinations)
          } else {
            reject(new Error('could not get popular destinations'))
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  }
}
