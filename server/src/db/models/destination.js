import Promise from 'bluebird'
import db from '../db'
import _ from 'lodash'

export default {
  createDestination: function(details) {
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
  updateDestination: function(details, destinationId) {
    let updateString = ''
    _.forEach(details, function(val, key) {
      updateString += `${key}` + ': "' + `${val}` + '"'
    })
    return new Promise(function(resolve) {
      let cypher = 'match (d:Destination) where id(d)=' + destinationId + ' SET d += {' + updateString + '}' + ' return d;'
      db.queryAsync(cypher)
        .then(function(updatedDestination) {
          if (updatedDestination) {
            resolve(updatedDestination)
          }
        })
        .catch(function(error) {
          console.error(error)
        })
    })
  },
  getDestinationById: function(destinationId) {
    return new Promise(function(resolve) {
      let cypher = `match (d:Destination) where id(d)=${destinationId} return d`
      db.queryAsync(cypher)
        .then(function(destination) {
          if (destination) {
            resolve(destination)
          } 
        })
        .catch(function(error) {
          console.error(error)
        })
    })
  },
  deleteDestinationById: function(destinationId) {
    return new Promise(function(resolve) {
      let cypher = `match (d:Destination) where id(d)=${destinationId} delete d;`
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
