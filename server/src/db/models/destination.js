import Promise from 'bluebird'
import db from '../db'

export default {
  createOrUpdateDestination: function(details) {
    return new Promise(function(resolve) {
      // let cypher = 'match (destination:Destination';
      db.saveAsync(details, 'Destination')
        .then(function(destination) {
          if (destination) {
            resolve(destination)
          } 
        })
        .catch(function(err) {
          console.error(err)
        })
    })
  },
  getDestinationById: function(destinationId) {
    return new Promise(function(resolve) {
      let cypher = 'match (d:Destination {id: ${destinationId}) return d;'
      db.queryAsync(cypher)
        .then(function(destination) {
          if (destination) {
            resolve(destination);
          } 
        })
        .catch(function(error) {
          console.error(error)
        })
    })
  },
  deleteDestinationById: function(destinationId) {
    return new Promise(function(resolve) {
      let cypher = 'match (d:Destination {id: ${destinationId}) delete d;'
      db.queryAsync(cypher)
        .then(function(deleted) {
          if (deleted) {
            resolve(deleted)
          }
        })
        .catch(function(error) {
          console.error(error)
        })
    })
  }
}
