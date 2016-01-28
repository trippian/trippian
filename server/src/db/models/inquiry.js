import Promise from 'bluebird'
import db from '../db'
import { updateStringObject } from '../../middleware/utils'

export default {
  // function for a user to create an inquiry
  createInquiry: (trippeeId, trippianId, inquiryProps) => {
    inquiryProps.createdAt = Date()
    inquiryProps.sender = trippeeId
    inquiryProps.receiver = trippianId
    return new Promise((resolve, reject) => {
      if (trippeeId === trippianId) {
        reject(new Error('user cannot make inquiry to self'))
      } else {
        db.relateAsync(trippeeId, 'INQUIRY', trippianId, inquiryProps)
          .then((inquiry) => {
            if (inquiry) {
              resolve(inquiry)
            } else {
              reject(new Error('inquiry could not be sent'))
            }
          })
      }
    })
  },
  // function that gets back all the inquiries given a trippian id
  getAllInquiriesForTrippian: (trippianId) => {
    return new Promise((resolve, reject) => {
      db.relationshipsAsync(trippianId, 'in', 'INQUIRY')
        .then((inquiries) => {
          if (inquiries) {
            resolve(inquiries)
          } else {
            reject(new Error('user has no inquiries at this time'))
          } 
        })
    })
  },
  getAllInquiries: () => {
    return new Promise((resolve, reject) => {
      let cypher = `match ()-[i:INQUIRY]->() return i`
      db.queryAsync(cypher)
        .then(allInquiries => {
          if (allInquiries.length) {
            resolve(allInquiries)
          }
        })
        .catch(error => {
          console.error(error)
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
            reject(new Error('inquiry was not deleted or does not exist'))
          }
        })
    })
  },
  // function for trippians to accept inquiry on put request
  acceptInquiry: (inquiryId) => {
    return new Promise((resolve, reject) => {
      let cypher = `match (u1:User)-[r:INQUIRY]->(u2:User) where id(r)=${inquiryId} create (u2)-[t:TOURED]->(u1) set t = r return t`
      db.queryAsync(cypher) 
        .then((touredRelationship) => {
          if (touredRelationship) {
            resolve(touredRelationship)
          } else {
            reject(new Error('inquiry could not be accepted or does not exist'))
          }
        })
    })
  },
  updateInquiry: (details, inquiryId) => {
    let updateString = updateStringObject(details, '')
    return new Promise((resolve, reject) => {
      let cypher = `match ()-[r:INQUIRY]->() where id(r)=${inquiryId} set r += {${updateString}} return r;`
      db.queryAsync(cypher)
        .then((updatedInquiry) => {
          if (updatedInquiry) {
            resolve(updatedInquiry)
          } else {
            reject(new Error('inquiry could not be updated'))
          }
        })
        .catch(function(error) {
          console.error(error)
        })
    })
  }
}
