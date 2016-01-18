const Promise = require('bluebird');
const db = require('../db');

module.exports = {
  // function for a user to create an inquiry
  createInquiry = function(trippeeId, trippianId) {
    return new Promise(function(resolve) {
      let cypher = 'match (trippee:User {facebookId:' + trippeeId + '}), (trippian:User {facebookId:' + trippianId + '}) create (trippee)-[r:INQUIRY]->(trippian) return r';
      
    });
  }
}