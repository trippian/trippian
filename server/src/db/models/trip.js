import Promise from 'bluebird'
import db from '../db'
import { updateStringObject } from '../../middleware/utils'

export default {
  // function that creates a new trip node and adds a POSTED relationship between a user and the trip
  createNewTrip: (userId, details) => {
    // when a new trip is created, we want to give it a netVote and a total votes property
    details.netVote = 0
    details.totalVotes = 0
    return new Promise((resolve) => {
      db.saveAsync(details, 'Trip')
        .then((newTrip) => {
          // when newTrip node is created we want to add a relationship between the user and trip
          let cypher = `match (u:User), (t:Trip) where id(u)=${userId} and id(t)=${newTrip.id} create (u)-[r:POSTED]->(t) return r;`
          db.queryAsync(cypher)
            .then((userTripRelationship) => {
              // once our relationship between the user and the trip is created, we want another 
              // relationship between the destination and the trip
              if (userTripRelationship.length) {
                let cypher = `match (t:Trip), (d:Destination) where id(t)=${newTrip.id} and d.destinationName =` + '"' + `${newTrip.destination}` + '"' + `create unique (t)-[r:LOCATED_IN]->(d) return r;`
                db.queryAsync(cypher)
                  .then((tripDestinationRelationship) => {
                    if (tripDestinationRelationship.length) {
                      // after the relationship between the destination and the trip is created we want to resolve the promise with all 3 parameters
                      resolve(newTrip, userTripRelationship, tripDestinationRelationship)
                    }
                  })
              }
            })
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  // get all trip information by ID for get request nah
  getTripById: (tripId) => {
    return new Promise((resolve) => {
      let cypher = `match (t:Trip) where id(t)=${tripId} return t;`
      db.queryAsync(cypher)
        .then((trip) => {
          if (trip) {
            resolve(trip)
          }
        })
    })
  },
  // get all trips in order of ranking
  getAllTrips: () => {
    return new Promise(function(resolve) {
      let cypher = 'match (trip:Trip) return trip'
      db.queryAsync(cypher)
        .then((trips) => {
          resolve(trips)
        })
    })
  },
  // function to update a trip if a trippian wishes to
  updateTrip: (tripId, details) => {
    let updateString = updateStringObject(details, '')

    return new Promise((resolve) => {
      let cypher = `match (t:Trip) where id(t)=${tripId} set t += {${updateString}} return t;`

      db.queryAsync(cypher)
        .then((updatedTrip) => {
          if (updatedTrip.length) {
            resolve(updatedTrip[0])
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  // allow all users to upvote or downvote a trip
  // client needs to send whether it is upvote or downvote
  upOrDownvoteTrip: (tripId, userId, vote) => {
    let incrementor = 0
    if (vote === 'UPVOTE') { incrementor = 1 }
    if (vote === 'DOWNVOTE') { incrementor = -1 }
    userId = parseInt(userId)
    return new Promise((resolve) => {
      let cypher = `match (t:Trip), (t)<-[r:${vote}]-(u:User) where id(t)=${tripId} and id(u)=${userId} return r;`
      db.queryAsync(cypher)
        .then((nodes) => {
          if (nodes.length) {
            resolve(new Error('User has already voted for this trip'))
          } else {
            let cypher = `match (u:User), (t:Trip) where id(u)=${userId} and id(t)=${tripId} create (u)-[r:${vote}]->(t) set t.netVote = t.netVote + ${incrementor}, t.totalVotes = t.totalVotes + 1 return t;`
            db.queryAsync(cypher)
              .then((updatedTrip) => {
                resolve(updatedTrip)
              })
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  deleteTrip: (tripId) => {
    return new Promise((resolve) => {
      let cypher = `match (t:Trip) where id(t)=${tripId} detach delete t;`
      db.queryAsync(cypher)
        .then((deleted) => {
          if (deleted) {
            resolve(deleted)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    })
  },
  // given a location name, we will return all the trips at that location 
  // this will be used when a user searches a location
  getAllTripsAtDestination: (destinationId, context = '') => {
    return new Promise((resolve) => {
      let cypher = `match (d:Destination)<-[r:LOCATED_IN]-(t:Trip) where id(d)=${destinationId} return t order by t.netVote*t.totalVotes ${context};`  
      db.queryAsync(cypher)
        .then((trips) => {
          resolve(trips)
        })
    })
  },
  // function that takes a userId and creates a WENT_ON relationship with a trip 
  // for trippees. need to 
  userWentOnTrip: (userId, tripId, tripDate) => {
    // userId = parseInt(userId)
    return new Promise((resolve) => {
      // let cypher =
      let cypher =  `match (u:User), (t:Trip) where id(u)=${userId} and id(t)=${tripId} create (u)-[r:WENT_ON]->(t) set r.date=${tripDate}`
      db.queryAsync(cypher)
        .then((wentOn) => {
          if (wentOn.length) {
            resolve(wentOn[0])
          }
        })
    })
  }
}