import Promise from 'bluebird'
import db from '../db'
import { updateStringObject } from '../../middleware/utils'

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
  acceptInquiry: function (inquiryId, accept) {
    return new Promise(function (resolve, reject) {
      let cypher = `match ()-[r:INQUIRY]->() where id(r)=${inquiryId} set r.accepted=${accept} return r`
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
  updateInquiry: function(details, inquiryId) {
    let updateString = updateStringObject(details, '')
    return new Promise(function(resolve) {
      let cypher = `match ()-[r:INQUIRY]->() where id(r)=${inquiryId} set r += {${updateString}} return r;`
      db.queryAsync(cypher)
        .then(function(updatedInquiry) {
          if (updatedInquiry) {
            resolve(updatedInquiry)
          }
        })
        .catch(function(error) {
          console.error(error)
        })
    })
  }
}
