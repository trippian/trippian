import Promise from 'bluebird'
import db from '../db'

export default {
  // function for a user to create an inquiry
  createInquiry: function (trippeeId, trippianId, inquiryProps) {
    return new Promise(function (resolve, reject) {
      db.relateAsync(trippeeId, 'INQUIRY', trippianId, inquiryProps)
        .then(function (inquiry) {
          if (inquiry) {
            resolve(inquiry)
          }
          reject('inquiry could not be sent')
        })
    })
  },
  // function that gets back all the inquiries given a trippian id
  getAllInquiriesForTrippian: function (trippianId) {
    return new Promise(function (resolve, reject) {
      db.relationshipsAsync(trippianId, 'in', 'INQUIRY')
        .then(function (inquiries) {
          if (inquiries) {
            console.log('we are receiving all inquiries for the trippian: ', inquiries)
            resolve(inquiries)
          }
          reject('trippian has no inquiries')
        })
    })
  },
  // function that deletes the inquiry from db if trippian rejects the request
  deleteInquiry: function (inquiryId) {
    return new Promise(function (resolve, reject) {
      let cypher = `match (u:User)-[r:INQUIRY]->() where id(r)=${inquiryId} delete r;`
      console.log(cypher)
      db.queryAsync(cypher)
        .then(function (deleted) {
          if (deleted) {
            resolve(deleted)
          }
          reject('inquiry was not deleted or does not exist')
        })
    })
  },
  // function for trippians to accept inquiry on put request
  acceptInquiry: function (inquiryId) {
    return new Promise(function (resolve, reject) {
      let cypher = 'match ()-[r:INQUIRY]->() where r.id=' + inquiryId + ' set r.accepted=true return r'
      db.queryAsync(cypher)
        .then(function (inquiry) {
          if (inquiry) {
            console.log('this is the edited inquiry: ', inquiry)
            resolve(inquiry)
          }
          reject(inquiry)
        })
    })
  },
  updateInquiry: function() {
    //similar to updateDestination
  }
}
