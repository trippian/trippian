import Promise from 'bluebird';
import db from '../db'

export default {
  // function for a user to create an inquiry
  createInquiry = function(trippeeId, trippianId) {
    return new Promise(function(resolve) {
      let cypher = 'match (trippee:User {facebookId:' + trippeeId + '}), (trippian:User {facebookId:' + trippianId + '}) create (trippee)-[r:INQUIRY]->(trippian) return r';
      
    });
  }
}