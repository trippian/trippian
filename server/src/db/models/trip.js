import Promise from 'bluebird'
import db from '../db'

export default {
  // function that creates a new trip node and adds a POSTED relationship between a user and the trip
  createNewTrip: function(userId, details) {
    return new Promise(function(resolve) {
      db.saveAsync(details, 'Trip')
        .then(function(newTrip) {
          // when newTrip node is created we want to add a relationship between the user and trip
          let cypher = `match (u:User), (t:Trip) where id(u)=${userId} and id(t)=${newTrip.id} create (u)-[r:POSTED]->(t) return r;`
          db.queryAsync(cypher)
            .then(function(userTripRelationship) {
              // once our relationship between the user and the trip is created, we want another 
              // relationship between the destination and the trip
              if (userTripRelationship.length) {
                let cypher = `match (t:Trip), (d:Destination) where id(t)=${newTrip.id} and d.destinationName =` + '"' + `${newTrip.destination}` + '"' + `create (t)-[r:LOCATED_IN]->(d) return r;`
                db.queryAsync(cypher)
                  .then(function(tripDestinationRelationship) {
                    if (tripDestinationRelationship.length) {
                      // after the relationship between the destination and the trip is created we want to resolve the promise with all 3 parameters
                      resolve(newTrip, userTripRelationship, tripDestinationRelationship)
                    }
                  })
              }
            })
        })
        .catch(function(error) {
          console.error(error)
        })
    })
  },
  // get all trip information by ID for get request nah
  getTripById: function(tripId) {
    return new Promise((resolve) => {
      let cypher = `match (t:Trip) where id(t)=${tripId} return r;`
      db.queryAsync(cypher)
        .then((trip) => {
          if (trip) {
            resolve(trip)
          }
        })
    })
  },
  // get all trips in order of ranking
  getAllTrips: function() {
    return new Promise(function(resolve) {
      let cypher = 'match (trip:Trip) return trip'
      db.queryAsync(cypher)
        .then(function(trips) {
          resolve(trips)
        })
    })
  },
  // allow all users to upvote or downvote a trip
  // client needs to send whether it is upvote or downvote
  upOrDownvoteTrip: function(tripId, userId, vote) {
    userId = parseInt(userId)
    return new Promise(function(resolve) {
      let cypher = `match (t:Trip), (t)<-[r:${vote}]-(u:User) where id(t)=${tripId} and id(u)=${userId} return r;`
      db.queryAsync(cypher)
        .then(function(nodes) {
          if (nodes.length) {
            console.log(nodes)
          } else {
            let cypher = 'match (user:User), (trip:Trip) where user.facebookId=' + userId + ' and id(trip)=' + tripId + ' create (user)-[r:' + vote + ']->(trip) return trip';
            db.queryAsync(cypher)
              .then(resolve)
          }
        })
    })
  },
  // given a location name, we will return all the trips at that location 
  // this will be used when a user searches a location
  getAllTripsAtDestination: function(destinationName) {
    return new Promise(function(resolve) {
      let cypher = `match (t:Trip) where t.destination=` + '"' + destinationName + '"' + ' return t;'
      db.queryAsync(cypher)
        .then(function(trips) {
          resolve(trips)
        })
    })
  },
  // function that takes a userId and creates a WENT_ON relationship with a trip 
  // for trippees. need to 
  userWentOnTrip: function(userId) {
    userId = parseInt(userId)
    return new Promise(function(resolve) {
      // let cypher = 
    })
  }
}