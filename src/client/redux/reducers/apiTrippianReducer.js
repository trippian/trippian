import {
  SET_DESTINATIONS, SET_TRIPPIANS, GET_DESTINATIONS_FAIL, GET_DESTINATION_BY_ID, GET_TRIPPIAN_BY_ID, GET_DESTINATIONS, GET_TRIPPIANS,
  ADD_DESTINATION, ADD_ADMIN_DESTINATION, REMOVE_DESTINATION,
  SET_TRIPPIAN
}
from '../actionTypes'
import {
  apologize,
  setDestinations, addDestination, addAdminDestination,
  setTrippians, addTrippian, addAdminTrippian,
  setUsers, addUser, addAdminUser,
  setInquirys, addInquiry, addAdminInquiry,
  setTrips, addTrip, addAdminTrip,
  setTrip, setUser, setTrippian, setInquiry
}
from '../actionCreators'

import {
  Map
}
from 'immutable'

import {
  fetchGetDestinationsByCategory, fetchGetTrippiansByCategory,
  fetchGetDestinations, fetchDeleteDestinationById, fetchGetDestinationById,
  fetchGetTrippians, fetchDeleteTrippianById, fetchGetTrippianById,
  fetchGetUsers, fetchDeleteUserById, fetchGetUserById,
  fetchGetInquiries, fetchDeleteInquiryById, fetchGetInquiryByReceiverId,
  fetchGetTrips, fetchDeleteTripById, fetchGetTripById

}
from '../../utils/apiTrippian'

const initialState = new Map({
  trippians: [],
  destinations: [],
  newDestinations: [],
  loaded: false,
  error: '',

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
      rating: 0,
      title: '',
      content: ''
    }]
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
      .catch(error => dispatch(apologize(error)))
  }
}
export function getPopularTrippians() {
  return (dispatch) => {
    return fetchGetTrippiansByCategory('popular')
      .then(trippians => dispatch(setTrippians(trippians)))
      .catch(error => dispatch(apologize(error)))
  }
}

// get One 
export function getDestinationById(id) {
  console.log('-- get a destination now', id)
  return (dispatch) => {
    return fetchGetDestinationById(id)
      .then((destination) => {
        console.log('--got it', destination)
        dispatch(setDestination(destination))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

export function getTripById(id) {
  console.log('-- get a Trip now', id)
  return (dispatch) => {
    return fetchGetTripById(id)
      .then((trip) => {
        console.log('--got it', trip)
          // TODO: update once server is updated 
        dispatch(setTrip(trip))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

export function getUserById(id) {
  console.log('-- get a User now', id)
  return (dispatch) => {
    return fetchGetUserById(id)
      .then((user) => {
        console.log('--got user', user)
        dispatch(setUser(user))
      })
      .catch(error => dispatch(apologize(error)))
  }
}
export function getTrippianById(id) {
  console.log('-- get a Trippian now', id)
  return (dispatch) => {
    return fetchGetTrippianById(id)
      .then((trippian) => {
        console.log('--got trippian', trippian)
        dispatch(setTrippian(trippian))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

export function getInquiryById(id) {
  console.log('-- get a Inquiry now', id)
  return (dispatch) => {
    return fetchGetInquiryByReceiverId(id)
      .then((inquiry) => {
        console.log('--got inquiry', inquiry)
        dispatch(setInquiry(inquiry))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

// posting 
export function postDestination(data) {
  console.log('-- posting a destination now', data)
    // after posting the destination, add the response data to the store on adminDestinations, aslo add to newDestinations on apiTrippians
  return (dispatch) => {
    return fetchPostDestination(data)
      .then(destination => {
        console.log('---posted', destination)
        dispatch(addDestination(destination))
        dispatch(addAdminDestination(destination))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

export function postTrip(data) {
  //TODO, update userId to global 
  data.userId = 32
  console.log('-- posting a trip now', data)
  return (dispatch) => {
    return fetchPostTrip(data)
      .then(trip => {
        console.log('---posted', trip)
          //TODO 
          // dispatch(addTrip(trip))
        dispatch(addAdminTrip(trip))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

export function postUser(data) {
  //TODO, update userId to global 
  data.senderId = 32
  data.trippianId = 31
  console.log('-- posting a trip now', data)
  return (dispatch) => {
    return fetchPostUser(data)
      .then(user => {
        console.log('---posted', user)
        dispatch(addAdminUser(user))
      })
      .catch(error => dispatch(apologize(error)))
  }
}
export function postTrippian(data) {
  console.log('-- posting a trippian now', data)
  return (dispatch) => {
    return fetchPostTrippian(data)
      .then(trippian => {
        console.log('---posted', trippian)
        dispatch(addAdminTrippian(trippian))
      })
      .catch(error => dispatch(apologize(error)))
  }
}
export function postInquiry(data) {
  //TODO, update userId to global 
  data.senderId = 32
  data.trippianId = 31
  console.log('-- posting a trip now', data)
  return (dispatch) => {
    return fetchPostInquiry(data)
      .then(inquiry => {
        console.log('---posted', inquiry)
        dispatch(addAdminInquiry(inquiry))
      })
      .catch(error => dispatch(apologize(error)))
  }
}
