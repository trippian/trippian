import Promise from 'bluebird';
import db from '../db';

export default {
  createDestination: function(destinationName) {
    return new Promise(function(resolve, reject) {
      // let cypher = 'match (destination:Destination';
      db.saveAsync({destinationName}, 'Destination')
        .then(function(destination) {
          if (destination) {
            resolve(destination);
          } reject('destination could not be created');
        });
    });
  },
  getDestinationById: function(destinationId) {
    return new Promise(function(resolve) {
      let cypher = '';
      db.queryAsync(cypher)
        .then(function(destination) {
          if (destination) {
            resolve(destination);
          } reject('destination does not exist');
        });
    });
  }
}
