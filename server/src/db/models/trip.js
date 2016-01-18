const Promise = require('bluebird');
const db = require('../db');

module.exports = {
  // function that creates a new trip node and adds a POSTED relationship between a user and the trip
  createNewTrip = function(userId) {
    return new Promise(function(resolve) {

    });
  },
  // get all trips in order of ranking
  getAllTrips = function() {
    return new Promise(function(resolve) {
      let cypher = 'match (trip:Trip) return trip';
      db.queryAsync(cypher)
        .then(function(trips) {
          resolve(trips);
        });
    });
  },
  // allow all users to upvote or downvote a trip
  // client needs to send whether it is upvote or downvote
  upOrDownvoteTrip = function(tripId, userId, vote) {
    userId = parseInt(userId);
    return new Promise(function(resolve, reject) {
      // if (up) {
      //   let voteRel = 'UPVOTED'
      // } else {
      //   let voteRel = 'DOWNVOTED' 
      // }
      let cypher = 'match (trip:Trip) where id(trip)=' + tripId + ' match (trip)<-[r:' + vote + ']-(user:User {facebookId=' + userId + '}) return user';
      db.queryAsync(cypher)
        .then(function(nodes) {
          if (nodes.length) {
            reject('user has already voted on this trip');
          } else {
            let cypher = 'match (user:User), (trip:Trip) where user.facebookId=' + userId + ' and id(trip)=' + tripId + ' create (user)-[r:' + vote + ']->(trip) return trip';
            db.queryAsync(cypher)
              .then(resolve);
          }
        });
    });
  },
  // given a location name, we will return all the trips at that location 
  // this will be used when a user searches a location
  getAllTripsAtLocation = function(locationName) {
    return new Promise(function(resolve) {
      let cypher = 'match (trip:Trip) where trip.location=' + locationName + ' return trip';
      db.queryAsync(cypher)
        .then(function(trips) {
          resolve(trips);
        });
    });
  },
  // function that takes a userId and creates a WENT_ON relationship with a trip 
  // for trippees. need to 
  userWentOnTrip = function(userId) {
    userId = parseInt(userId);
    return new Promise(function(resolve) {
      // let cypher = 
    })
  }
}
