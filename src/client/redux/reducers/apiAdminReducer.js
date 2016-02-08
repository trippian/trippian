import log from '../../log'
import {
  GET_DESTINATIONS_FAIL,
  SET_ADMIN_DESTINATIONS, ADD_ADMIN_DESTINATION, REMOVE_ADMIN_DESTINATION, SET_ADMIN_CURRENT_DESTINATION,
  SET_ADMIN_TRIPPIANS, ADD_ADMIN_TRIPPIAN, REMOVE_ADMIN_TRIPPIAN, SET_ADMIN_CURRENT_TRIPPIAN,
  SET_ADMIN_USERS, ADD_ADMIN_USER, REMOVE_ADMIN_USER, SET_ADMIN_CURRENT_USER,
  SET_ADMIN_TRIPS, ADD_ADMIN_TRIP, REMOVE_ADMIN_TRIP, SET_ADMIN_CURRENT_TRIP,
  SET_ADMIN_INQUIRIES, ADD_ADMIN_INQUIRY, REMOVE_ADMIN_INQUIRY, SET_ADMIN_CURRENT_INQUIRY
}
from '../actionTypes'
import {
  setAdminDestinations, apologize, removeAdminDestination, removeDestination, setAdminCurrentDestination,
  setAdminTrippians, addAdminTrippian, removeAdminTrippian, setAdminCurrentTrippian,
  setAdminUsers, addAdminUser, removeAdminUser, setAdminCurrentUser,
  setAdminInquiries, addAdminInquiry, removeAdminInquiry, setAdminCurrentInquiry,
  setAdminTrips, addAdminTrip, removeAdminTrip, setAdminCurrentTrip
}

from '../actionCreators'

import {
  Map
}
from 'immutable'
import {
  fetchGetDestinations, fetchDeleteDestinationById, fetchGetDestinationById,
  fetchGetTrippians, fetchDeleteTrippianById, fetchGetTrippianById,
  fetchGetUsers, fetchDeleteUserById, fetchGetUserById,
  fetchGetInquiries, fetchDeleteInquiryById, fetchGetInquiryByReceiverId,
  fetchGetTrips, fetchDeleteTripById, fetchGetTripById
}
from '../../utils/apiTrippian'

const initialState = new Map({
  adminTrippians: [],
  adminDestinations: [],
  adminUsers: [],
  adminInquiries: [],
  adminTrips: [],

  currentUser: {
    name: '',
    email: '',
    facebookId: null,
    picture: 'http://lorempixel.com/200/200/people/'
  },
  currentTrippian: {
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
        userName: '',
        facebookId: '',
        picture: '',
        userId: '',
        rating: 0,
        title: '',
        content: ''
      }
    }]

  },
  currentInquiry: {
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
  currentTrip: {
    netVote: 0,
    totalVotes: 0,
    destination: '',
    title: '',
    summary: '',
    details: '',
    feature: 'http://lorempixel.com/400/200/city/',
    album: []
  },
  currentDestination: {
    name: '',
    description: '',
    feature: 'http://lorempixel.com/400/200/city/',
    whyVisit: ''
  },
  loaded: false,
  error: ''
})

import store from '../store'

export default function apiTrippianReducer(state = initialState, action) {
  log.info('dispatching', action.type, action.payload)
  switch (action.type) {
    // setting 
    case SET_ADMIN_DESTINATIONS:
      return state.merge(new Map({
        adminDestinations: action.payload.destinations
      }))
    case SET_ADMIN_TRIPPIANS:
      return state.merge(new Map({
        adminTrippians: action.payload.trippians
      }))
    case SET_ADMIN_USERS:
      return state.merge(new Map({
        adminUsers: action.payload.users
      }))

    case SET_ADMIN_TRIPS:
      return state.merge(new Map({
        adminTrips: action.payload.trips
      }))

    case SET_ADMIN_INQUIRIES:
      return state.merge(new Map({
        adminInquiries: action.payload.inquiries
      }))

      // deleting
    case REMOVE_ADMIN_DESTINATION:
      let oldDestinations = state.get('adminDestinations')
      oldDestinations = oldDestinations.filter(x => x.id !== action.payload.id)
      return state.merge(new Map({
        adminDestinations: oldDestinations
      }))
    case REMOVE_ADMIN_TRIP:
      let oldTrip = state.get('adminTrips')
      oldTrip = oldTrip.filter(x => x.id !== action.payload.id)
      return state.merge(new Map({
        adminTrips: oldTrip
      }))
    case REMOVE_ADMIN_USER:
      let oldUser = state.get('adminUsers')
      oldUser = oldUser.filter(x => x.id !== action.payload.id)
      return state.merge(new Map({
        adminUsers: oldUser
      }))
    case REMOVE_ADMIN_TRIPPIAN:
      let oldTrippian = state.get('adminTrippians')
      oldTrippian = oldTrippian.filter(x => x.id !== action.payload.id)
      return state.merge(new Map({
        adminTrippians: oldTrippian
      }))
    case REMOVE_ADMIN_INQUIRY:
      let oldInquiries = state.get('adminInquiries')
      oldInquiries = oldInquiries.filter(x => x.id !== action.payload.id)
      return state.merge(new Map({
        adminInquiries: oldInquiries
      }))

      // setting current 
    case SET_ADMIN_CURRENT_DESTINATION:
      return state.merge(new Map({
        currentDestination: action.payload.destination
      }))
    case SET_ADMIN_CURRENT_TRIP:
      return state.merge(new Map({
        currentTrip: action.payload.trip
      }))
    case SET_ADMIN_CURRENT_USER:
      return state.merge(new Map({
        currentUser: action.payload.user
      }))
    case SET_ADMIN_CURRENT_TRIPPIAN:
      return state.merge(new Map({
        currentTrippian: action.payload.trippian
      }))
    case SET_ADMIN_CURRENT_INQUIRY:
      return state.merge(new Map({
        currentInquiry: action.payload.inquiry
      }))

      // adding one item 
    case ADD_ADMIN_DESTINATION:
      let oldDestAdd = state.get('adminDestinations')
      oldDestAdd.push(action.payload.destination)
      return state.merge(new Map({
        adminDestinations: oldDestAdd
      }))
    case ADD_ADMIN_TRIP:
      let oldTripAdd = state.get('adminTrips')
      oldTripAdd.push(action.payload.trip)
      return state.merge(new Map({
        adminTrips: oldTripAdd
      }))

    case ADD_ADMIN_USER:
      let oldUserAdd = state.get('adminUsers')
      oldUserAdd.push(action.payload.user)
      return state.merge(new Map({
        adminUsers: oldUserAdd
      }))
    case ADD_ADMIN_TRIPPIAN:
      let oldTrippianAdd = state.get('adminTrippians')
      oldTrippianAdd.push(action.payload.trippian)
      return state.merge(new Map({
        adminTrippians: oldTrippianAdd
      }))
    case ADD_ADMIN_INQUIRY:
      let oldInquiriesAdd = state.get('adminInquiries')
      oldInquiriesAdd.push(action.payload.inquiry)
      return state.merge(new Map({
        adminInquiries: oldInquiriesAdd
      }))

      // error handling, will add more later 
    case GET_DESTINATIONS_FAIL:
      return state.merge(new Map({
        loaded: false,
        loading: false,
        error: action.payload.errorMessage
      }))

    default:
      return state
  }
}

//getting 
export function getAdminDestinations() {
  return (dispatch) => {
    return fetchGetDestinations()
      .then((destinations) => {
        log.info('got destinations', destinations)
        dispatch(setAdminDestinations(destinations))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

export function getAdminTrippians() {
  log.info('-- get a trippians now')
  return (dispatch) => {
    return fetchGetTrippians()
      .then(trippians => dispatch(setAdminTrippians(trippians)))
      .catch(error => dispatch(apologize(error)))
  }
}

export function getAdminUsers() {
  log.info('-- get a trippians now')
  return (dispatch) => {
    return fetchGetUsers()
      .then(users => dispatch(setAdminUsers(users)))
      .catch(error => dispatch(apologize(error)))
  }
}

export function getAdminInquiries() {
  log.info('-- get a inquiries now')
  return (dispatch) => {
    return fetchGetInquiries()
      .then(inquiries => {
        log.info('--- got inquiries', inquiries)
        dispatch(setAdminInquiries(inquiries))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

export function getAdminTrips() {
  log.info('-- get a trips now')
  return (dispatch) => {
    return fetchGetTrips()
      .then(trips => dispatch(setAdminTrips(trips)))
      .catch(error => dispatch(apologize(error)))
  }
}

// deleting 
export function deleteAdminDestinationById(id) {
  log.info('-- deleting a destination now', id)
  return (dispatch) => {
    return fetchDeleteDestinationById(id)
      .then(() => {
        log.info('--deleted', id)
        dispatch(removeDestination(id))
        dispatch(removeAdminDestination(id))
      })
      .catch(error => dispatch(apologize(error)))
  }
}
export function deleteAdminTrippianById(id) {
  log.info('-- deleting a trippian now', id)
  return (dispatch) => {
    return fetchDeleteTrippianById(id)
      .then(() => {
        log.info('--deleted trippian', id)
          // dispatch(removeTrippian(id))
        dispatch(removeAdminTrippian(id))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

export function deleteAdminUserById(id) {
  log.info('-- deleting a User now', id)
  return (dispatch) => {
    return fetchDeleteUserById(id)
      .then(() => {
        log.info('--deleted User', id)
          // dispatch(removeUser(id))
        dispatch(removeAdminUser(id))
      })
      .catch(error => dispatch(apologize(error)))
  }
}
export function deleteAdminTripById(id) {
  log.info('-- deleting a trip now', id)
  return (dispatch) => {
    return fetchDeleteTripById(id)
      .then(() => {
        log.info('--deleted Trip', id)
          // dispatch(removeTrip(id))
        dispatch(removeAdminTrip(id))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

export function deleteAdminInquiryById(id) {
  log.info('-- deleting a Inquiry now', id)
  return (dispatch) => {
    return fetchDeleteInquiryById(id)
      .then(() => {
        log.info('--deleted Inquiry', id)
          // dispatch(removeInquiry(id))
        dispatch(removeAdminInquiry(id))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

// getting one
export function getAdminDestinationById(id) {
  log.info('-- get a destination now', id)

  // first check if the store already have the data 
  const localDestinations = store.getState().apiAdmin.get('adminDestinations')
  const cached = null

  for (let i = 0; i < localDestinations.length; i++) {
    const dest = localDestinations[i]
      // log.info('*** cached?', dest, dest.id === id, dest.id, dest['id'], dest.destinationName)
    if (+dest.id === +id) {
      log.info('**getting destination from cached', id)
      return (dispatch) => {
        dispatch(setAdminCurrentDestination(dest))
      }
    }
  }

  log.info('** no cached data available, getting from remote')
    // go on the network and fetch the data 
  return (dispatch) => {
    return fetchGetDestinationById(id)
      .then((destination) => {
        log.info('--got it', destination)
        dispatch(setAdminCurrentDestination(destination))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

export function getAdminTripById(id) {
  log.info('-- get a Trip now', id)

  // first check if the store already have the data 
  // const localTrips = store.getState().apiAdmin.get('adminTrips')
  // const cached = null

  // for (let i = 0; i < localTrips.length; i++) {
  //   const trip = localTrips[i]
  //     // log.info('*** cached?', dest, dest.id === id, dest.id, dest['id'], dest.destinationName)
  //   if (+trip.id === +id) {
  //     log.info('**getting trip from cached', id)
  //     return (dispatch) => {
  //       dispatch(setAdminCurrentTrip(trip))
  //     }
  //   }
  // }

  // log.info('** no cached data available, getting from remote')
  // go on the network and fetch the data 
  return (dispatch) => {
    return fetchGetTripById(id)
      .then((trip) => {
        log.info('--got it', trip)
          // TODO: update once server is updated 
        dispatch(setAdminCurrentTrip(trip))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

export function getAdminUserById(id) {
  log.info('-- get a User now', id)
  return (dispatch) => {
    return fetchGetUserById(id)
      .then((user) => {
        log.info('--got user', user)
        dispatch(setAdminCurrentUser(user))
      })
      .catch(error => dispatch(apologize(error)))
  }
}
export function getAdminTrippianById(id) {
  log.info('-- get a Trippian now', id)
  return (dispatch) => {
    return fetchGetTrippianById(id)
      .then((trippian) => {
        log.info('--got trippian', trippian)
        dispatch(setAdminCurrentTrippian(trippian))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

export function getAdminInquiryById(id) {
  log.info('-- get a Inquiry now', id)
  return (dispatch) => {
    return fetchGetInquiryByReceiverId(id)
      .then((inquiry) => {
        log.info('--got inquiry', inquiry)
        dispatch(setAdminCurrentInquiry(inquiry))
      })
      .catch(error => dispatch(apologize(error)))
  }
}
