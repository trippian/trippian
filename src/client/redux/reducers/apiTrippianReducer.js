import {
  FETCH_REMOTE_RESOURCE_FAIL,
  SET_DESTINATIONS, SET_TRIPPIANS, GET_DESTINATIONS_FAIL, GET_DESTINATION_BY_ID, GET_TRIPPIAN_BY_ID, GET_DESTINATIONS, GET_TRIPPIANS,
  ADD_DESTINATION, ADD_ADMIN_DESTINATION, REMOVE_DESTINATION,
  SET_TRIPPIAN, SET_DESTINATION, ADD_REVIEW, SET_INQUIRY, SET_TRIP, UPDATE_VOTE
}
from '../actionTypes'
import {
  setDestinations, addDestination, addAdminDestination, setDestination,
  setTrippians, addTrippian, addAdminTrippian,
  setUsers, addUser, addAdminUser,
  setInquirys, addInquiry, addAdminInquiry,
  setTrips, addTrip, addAdminTrip, setTrip,
  setUser, setTrippian, setInquiry,
  addReview, updateVote
}
from '../actionCreators'
import {
  apologize, alertSuccess, alertInfo
}
from '../../utils/storeUtils'


import {
  Map
}
from 'immutable'

import {
  fetchGetDestinationsByCategory, fetchGetTrippiansByCategory,
  fetchGetDestinations, fetchDeleteDestinationById, fetchGetDestinationById, fetchPostDestination,
  fetchGetTrippians, fetchDeleteTrippianById, fetchGetTrippianById, fetchPostTrippian,
  fetchGetUsers, fetchDeleteUserById, fetchGetUserById, fetchPostUser,
  fetchGetInquiries, fetchDeleteInquiryById, fetchGetInquiryByReceiverId, fetchPostInquiry,
  fetchGetTrips, fetchDeleteTripById, fetchGetTripById, fetchPostTrip,
  fetchPostReview, fetchUpdateVote, fetchLogin, fetchLogout

}
from '../../utils/apiTrippian'
import store from '../store'

const initialState = new Map({
  currentUser: {
    username: '',
    displayName: '',
    email: '',
    id: 32, //TODO
    facebookId: 0,
    picture: 'http://lorempixel.com/200/200/people/',
    trippian: false
  },

  currentReview: {
    createdAt: '',
    username: '',
    facebookId: '',
    userAvatar: '',
    userId: '',
    rating: 0,
    title: '',
    content: ''
  },
  trippians: [],
  destinations: [],
  newDestinations: [],
  loaded: false,
  error: '',
  destination: {
    feature: 'http://lorempixel.com/200/200/people/',
    name: '',
    whyVisit: '',
    description: '',
    slogan: 'awesome city',
    averageRating: 5,
    popularTrips: [],
    album: []
  },
  // trip data 
  // summary: "meet at 5 pm and go to sightglass",
  // netVote: 0,
  // totalVotes: 0,
  // destination: "San Francisco, CA",
  // details: "we are going to drink coffee",
  // title: "Go to sightglass",
  // feature: 'http://lorempixel.com/200/200/city/'
  // album: []
  // id: 159
  trippian: {
    name: '',
    email: '',
    location: '',
    mobile: '',
    slogan: '',
    website: '',
    bio: '',
    introduction: '',

    availabileTime: '',
    numberOfReviews: 0,
    avarageRating: 0,
    facebookId: null,
    picture: 'http://lorempixel.com/200/200/people/',
    reviews: [{
      start: 0,
      end: 0,
      properties: {
        createdAt: '',
        username: '',
        facebookId: '',
        userAvatar: 'http://lorempixel.com/200/200/people/',
        userId: '',
        rating: 0,
        title: '',
        content: '',
        trippian: false
      }
    }]
  },
  inquiry: {
    type: 'INQUIRY',
    start: 0,
    end: 1,
    properties: {
      createdAt: '',
      senderId: 0,
      receiverId: 0,
      personCount: 5,
      startDate: '2015-02-14',
      endDate: '2015-02-28',
      email: '',
      mobile: '',
      subject: 'hi',
      content: '',
      accepted: false
    }
  },

  // curl -X PUT -d "userId=32" http://localhost:4000/api/trip/51/?voteType=UPVOTE
  trip: {
    netVote: 0,
    totalVotes: 0,
    destination: '',
    title: '',
    summary: '',
    details: '',
    feature: 'http://lorempixel.com/400/200/city/',
    album: []
  }
})

export default function apiTrippianReducer(state = initialState, action) {
  console.log('dispatching', action.type, action.payload)
  switch (action.type) {
    case SET_DESTINATIONS:
      return state.merge(new Map({
        destinations: action.payload.destinations
      }))
    case SET_TRIPPIANS:
      return state.merge(new Map({
        trippians: action.payload.trippians
      }))
    case GET_DESTINATIONS_FAIL:
      return state.merge(new Map({
        loaded: false,
        loading: false,
        error: action.payload.errorMessage
      }))
    case ADD_DESTINATION:
      const newDestinations = state.get('newDestinations')
      newDestinations.push(action.payload.destination)
      return state.merge(new Map({
        newDestinations: newDestinations
      }))
    case REMOVE_DESTINATION:
      const id = action.payload.id
      let destinations = state.get('destinations')
      destinations = destinations.filter(x => x.id !== id)
      return state.merge(new Map({
        destinations
      }))

    case SET_TRIPPIAN:
      return state.merge(new Map({
        trippian: action.payload.trippian
      }))
    case SET_DESTINATION:
      return state.merge(new Map({
        destination: action.payload.destination
      }))

    case SET_TRIP:
      return state.merge(new Map({
        trip: action.payload.trip
      }))
    case ADD_REVIEW:
      const trippianR = state.get('trippian')
      trippianR.reviews.push(action.payload.review)
      return state.merge(new Map({
        trippian: trippianR
      }))
    case SET_INQUIRY:
      return state.merge(new Map({
        inquiry: action.payload.inquiry
      }))

    case UPDATE_VOTE:
      let destP = state.get('destination')
        // let popTrips = destP.popularTrips 
      destP.popularTrips.forEach(trip => {
        if (trip.id === action.payload.tripId) {
          trip.netVote += +action.payload.vote
          console.log('------ updating vote', action.payload.tripId, trip.netVote)
        }
      })
      return state.merge(new Map({
        destination: destP
      }))

    default:
      return state
  }
}



export function getPopularDestinations() {
  return (dispatch) => {
    return fetchGetDestinationsByCategory('popular')
      .then((destinations) => {
        // once get the data, set the store 
        dispatch(setDestinations(destinations))
      })
      // catch any error and set the store state 
      .catch(error => apologize(error))
  }
}
export function getPopularTrippians() {
  return (dispatch) => {
    return fetchGetTrippiansByCategory('popular')
      .then(trippians => dispatch(setTrippians(trippians)))
      .catch(error => apologize(error))
  }
}

// get One 
export function getDestinationById(id) {
  console.log('-- getting a destination now in reducer', id)
  return (dispatch) => {
    return fetchGetDestinationById(id)
      .then((destination) => {
        console.log('--got it', destination)
        dispatch(setDestination(destination))
      })
      .catch(error => apologize(error))
  }
}

export function getTripById(id) {
  console.log('-- getting a Trip now in reducer', id)
  return (dispatch) => {
    return fetchGetTripById(id)
      .then((trip) => {
        console.log('--got it', trip)
          // TODO: update once server is updated 
        dispatch(setTrip(trip))
      })
      .catch(error => apologize(error))
  }
}

export function getUserById(id) {
  console.log('-- getting a User now in reducer', id)
  return (dispatch) => {
    return fetchGetUserById(id)
      .then((user) => {
        console.log('--got user', user)
        dispatch(setUser(user))
      })
      .catch(error => apologize(error))
  }
}
export function getTrippianById(id) {
  console.log('-- getting a Trippian now in reducer', id)
  return (dispatch) => {
    return fetchGetTrippianById(id)
      .then((trippian) => {
        console.log('--got trippian', trippian)
        dispatch(setTrippian(trippian))
      })
      .catch(error => apologize(error))
  }
}

export function getInquiryById(id) {
  console.log('-- getting a Inquiry now in reducer', id)
  return (dispatch) => {
    return fetchGetInquiryByReceiverId(id)
      .then((inquiry) => {
        console.log('--got inquiry', inquiry)
        dispatch(setInquiry(inquiry))
      })
      .catch(error => apologize(error))
  }
}

// posting 
export function postDestination(data) {
  alertInfo('Submitting the destination information now...')

  console.log('-- posting a destination now in reducer', data)
    // after posting the destination, add the response data to the store on adminDestinations, aslo add to newDestinations on apiTrippians
  return (dispatch) => {
    return fetchPostDestination(data)
      .then(destination => {
        console.log('---posted', destination)
        dispatch(addDestination(destination))
        dispatch(addAdminDestination(destination))
        alertSuccess('Successfully added destination')
      })
      .catch(error => apologize(error))
  }
}

export function postTrip(data) {
  //TODO, update userId to global 
  data.userId = store.getState().apiTrippian.get('currentUser').id
  console.log('-- posting a trip now in reducer', data)
  alertInfo('Submitting the trip information now...')
  return (dispatch) => {
    return fetchPostTrip(data)
      .then(trip => {
        console.log('---posted', trip)
        dispatch(setTrip(trip))
        dispatch(addAdminTrip(trip))
        alertSuccess('Succeed', `${trip.id}: ${trip.title}`)
      })
      //TODO: customize this to give friendly error message 
      .catch(error => apologize(error))
  }
}
export function postUser(data) {
  //TODO, update userId to global 
  data.senderId = 32
  data.trippianId = 31
  console.log('-- posting a trip now in reducer', data)
  return (dispatch) => {
    return fetchPostUser(data)
      .then(user => {
        console.log('---posted', user)
        dispatch(addAdminUser(user))
      })
      .catch(error => apologize(error))
  }
}
export function postTrippian(data) {
  alertInfo('Submitting now...')
  console.log('-- posting a trippian now in reducer', data)
  return (dispatch) => {
    return fetchPostTrippian(data)
      .then(trippian => {
        console.log('---posted', trippian)
        dispatch(addAdminTrippian(trippian))
        alertSuccess('Successfully added trippian')

      })
      .catch(error => apologize(error))
  }
}



export function postInquiry(data) {
  alertInfo('Submitting inquiry now...')

  data.senderId = store.getState().apiTrippian.get('currentUser').id
  data.trippianId = store.getState().apiTrippian.get('trippian').id
  console.log('-- posting a inquiry now in reducer', data)
  return (dispatch) => {
    return fetchPostInquiry(data)
      .then(inquiry => {
        console.log('---posted', inquiry)
        dispatch(setInquiry(inquiry))
        dispatch(addAdminInquiry(inquiry))
        alertSuccess('Successfully submitted inquiry')
      })
      .catch(error => apologize(error))
  }
}

export function postReview(data) {
  alertInfo('Submitting review now...')

  const user = store.getState().apiTrippian.get('currentUser')
  data.userId = user.id
  data.username = user.username
  data.userAvatar = user.picture
  data.facebookId = user.facebookId
  data.createdAt = new Date()
  data.trippian = user.trippian
  console.log('-- posting a review now in reducer', data)
  return (dispatch) => {
    return fetchPostReview(data)
      .then(review => {
        console.log('---posted', review)
        dispatch(addReview(review)) // add review to current trippian on the front-end
        alertSuccess('Successfully added review')
      })
      .catch(error => apologize(error))
  }
}


//Put requests 
// vote can be 1 or -1 
export function voteTrip(vote = 1, tripId) {
  alertInfo('Voting for trip now...')
  const userId = store.getState().apiTrippian.get('currentUser').id
  console.log('-- voting a trip now in reducer', vote, tripId)
  return (dispatch) => {
    return fetchUpdateVote({
        userId, tripId, vote
      })
      .then(trip => {
        console.log('---voted', trip)
        dispatch(updateVote(vote, tripId))
        alertSuccess('Successfully voted for trip', tripId)
      })
      .catch(error => apologize(error))
  }
}

// Login related 
export function login(type = 'facebook') {
  alertInfo('Login with facebook now...')
  console.log('-- login now in reducer', type)
  return (dispatch) => {
    return fetchLogin(type)
      .then(() => {
        console.log('---logged in')
          // dispatch(updateVote(vote, tripId))
          // TODO: update state 
        alertSuccess('Successfully logged in', window.document.cookie)
      })
      .catch(error => apologize(error))
  }
}

export function logout() {
  alertInfo('Logout now...')
  console.log('-- logout now in reducer')
  return (dispatch) => {
    return fetchLogout()
      .then(() => {
        console.log('---logged out')
          // dispatch(updateVote(vote, tripId))
          // TODO: update state 
        alertSuccess('Successfully logged out', window.document.cookie)
      })
      .catch(error => apologize(error))
  }
}
