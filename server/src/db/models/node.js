import Promise from 'bluebird';
import db from '../db';

export default {
  // get relationship between two nodes
  getRelationships: function(nodeId, relationDirection, relationLabel) {
    return new Promise(function(resolve) {
      return db.relationshipsAsync(nodeId, relationDirection, relationLabel)
        .then(function(relationship) {
          resolve(relationship);
        });
    });
  }
}