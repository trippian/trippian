import Promise from 'bluebird'
import db from '../db'
import { updateStringObject } from '../../middleware/utils'

export default {
  // function for a user to create an inquiry
  createInquiry: (trippeeId, trippianId, inquiryProps) => {
    return new Promise((resolve) => {
      db.relateAsync(trippeeId, 'INQUIRY', trippianId, inquiryProps)
        .then((inquiry) => {
          if (inquiry) {
            resolve(inquiry)
          } else {
            resolve(new Error('inquiry could not be sent'))
          }
        })
    })
  },
  // function that gets back all the inquiries given a trippian id
  getAllInquiriesForTrippian: (trippianId) => {
    return new Promise((resolve) => {
      db.relationshipsAsync(trippianId, 'in', 'INQUIRY')
        .then((inquiries) => {
          if (inquiries) {
            resolve(inquiries)
          } else {
            resolve(new Error('user has no inquiries at this time'))
          } 
        })
    })
  },
  // function that deletes the inquiry from db if trippian rejects the request
  deleteInquiry: (inquiryId) => {
    return new Promise((resolve, reject) => {
      let cypher = `match (u:User)-[r:INQUIRY]->() where id(r)=${inquiryId} delete r;`
      db.queryAsync(cypher)
        .then((deleted) => {
          if (deleted) {
            resolve(deleted)
          } else {
            resolve(new Error('inquiry was not deleted or does not exist'))
          }
        })
    })
  },
  // function for trippians to accept inquiry on put request
  acceptInquiry: (inquiryId) => {
    return new Promise((resolve) => {
      let cypher = `match (u1:User)-[r:INQUIRY]->(u2:User) where id(r)=${inquiryId} create (u2)-[t:TOURED]->(u1) set t = r return t`
      db.queryAsync(cypher) 
        .then((touredRelationship) => {
          if (touredRelationship) {
            resolve(touredRelationship)
          } else {
            resolve(new Error('inquiry could not be accepted or does not exist'))
          }
        })
    })
  },
  updateInquiry: (details, inquiryId) => {
    let updateString = updateStringObject(details, '')
    return new Promise((resolve) => {
      let cypher = `match ()-[r:INQUIRY]->() where id(r)=${inquiryId} set r += {${updateString}} return r;`
      db.queryAsync(cypher)
        .then((updatedInquiry) => {
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
