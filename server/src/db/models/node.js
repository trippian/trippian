const Promise = require('bluebird');
const User = require('./user');
const db = require('../db');
const _ = require('lodash');

module.exports = {
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