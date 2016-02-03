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
  console.log('dispatching', action.type, action.payload)
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
        console.log('got destinations', destinations)
        dispatch(setAdminDestinations(destinations))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

export function getAdminTrippians() {
  console.log('-- get a trippians now')
  return (dispatch) => {
    return fetchGetTrippians()
      .then(trippians => dispatch(setAdminTrippians(trippians)))
      .catch(error => dispatch(apologize(error)))
  }
}

export function getAdminUsers() {
  console.log('-- get a trippians now')
  return (dispatch) => {
    return fetchGetUsers()
      .then(users => dispatch(setAdminUsers(users)))
      .catch(error => dispatch(apologize(error)))
  }
}

export function getAdminInquiries() {
  console.log('-- get a inquiries now')
  return (dispatch) => {
    return fetchGetInquiries()
      .then(inquiries => {
        console.log('--- got inquiries', inquiries)
        dispatch(setAdminInquiries(inquiries))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

export function getAdminTrips() {
  console.log('-- get a trips now')
  return (dispatch) => {
    return fetchGetTrips()
      .then(trips => dispatch(setAdminTrips(trips)))
      .catch(error => dispatch(apologize(error)))
  }
}

// deleting 
export function deleteAdminDestinationById(id) {
  console.log('-- deleting a destination now', id)
  return (dispatch) => {
    return fetchDeleteDestinationById(id)
      .then(() => {
        console.log('--deleted', id)
        dispatch(removeDestination(id))
        dispatch(removeAdminDestination(id))
      })
      .catch(error => dispatch(apologize(error)))
  }
}
export function deleteAdminTrippianById(id) {
  console.log('-- deleting a trippian now', id)
  return (dispatch) => {
    return fetchDeleteTrippianById(id)
      .then(() => {
        console.log('--deleted trippian', id)
          // dispatch(removeTrippian(id))
        dispatch(removeAdminTrippian(id))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

export function deleteAdminUserById(id) {
  console.log('-- deleting a User now', id)
  return (dispatch) => {
    return fetchDeleteUserById(id)
      .then(() => {
        console.log('--deleted User', id)
          // dispatch(removeUser(id))
        dispatch(removeAdminUser(id))
      })
      .catch(error => dispatch(apologize(error)))
  }
}
export function deleteAdminTripById(id) {
  console.log('-- deleting a trip now', id)
  return (dispatch) => {
    return fetchDeleteTripById(id)
      .then(() => {
        console.log('--deleted Trip', id)
          // dispatch(removeTrip(id))
        dispatch(removeAdminTrip(id))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

export function deleteAdminInquiryById(id) {
  console.log('-- deleting a Inquiry now', id)
  return (dispatch) => {
    return fetchDeleteInquiryById(id)
      .then(() => {
        console.log('--deleted Inquiry', id)
          // dispatch(removeInquiry(id))
        dispatch(removeAdminInquiry(id))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

// getting one
export function getAdminDestinationById(id) {
  console.log('-- get a destination now', id)

  // first check if the store already have the data 
  const localDestinations = store.getState().apiAdmin.get('adminDestinations')
  const cached = null

  for (let i = 0; i < localDestinations.length; i++) {
    const dest = localDestinations[i]
      // console.log('*** cached?', dest, dest.id === id, dest.id, dest['id'], dest.destinationName)
    if (+dest.id === +id) {
      console.log('**getting destination from cached', id)
      return (dispatch) => {
        dispatch(setAdminCurrentDestination(dest))
      }
    }
  }

  console.log('** no cached data available, getting from remote')
    // go on the network and fetch the data 
  return (dispatch) => {
    return fetchGetDestinationById(id)
      .then((destination) => {
        console.log('--got it', destination)
        dispatch(setAdminCurrentDestination(destination))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

export function getAdminTripById(id) {
  console.log('-- get a Trip now', id)

  // first check if the store already have the data 
  // const localTrips = store.getState().apiAdmin.get('adminTrips')
  // const cached = null

  // for (let i = 0; i < localTrips.length; i++) {
  //   const trip = localTrips[i]
  //     // console.log('*** cached?', dest, dest.id === id, dest.id, dest['id'], dest.destinationName)
  //   if (+trip.id === +id) {
  //     console.log('**getting trip from cached', id)
  //     return (dispatch) => {
  //       dispatch(setAdminCurrentTrip(trip))
  //     }
  //   }
  // }

  // console.log('** no cached data available, getting from remote')
  // go on the network and fetch the data 
  return (dispatch) => {
    return fetchGetTripById(id)
      .then((trip) => {
        console.log('--got it', trip)
          // TODO: update once server is updated 
        dispatch(setAdminCurrentTrip(trip))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

export function getAdminUserById(id) {
  console.log('-- get a User now', id)
  return (dispatch) => {
    return fetchGetUserById(id)
      .then((user) => {
        console.log('--got user', user)
        dispatch(setAdminCurrentUser(user))
      })
      .catch(error => dispatch(apologize(error)))
  }
}
export function getAdminTrippianById(id) {
  console.log('-- get a Trippian now', id)
  return (dispatch) => {
    return fetchGetTrippianById(id)
      .then((trippian) => {
        console.log('--got trippian', trippian)
        dispatch(setAdminCurrentTrippian(trippian))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

export function getAdminInquiryById(id) {
  console.log('-- get a Inquiry now', id)
  return (dispatch) => {
    return fetchGetInquiryByReceiverId(id)
      .then((inquiry) => {
        console.log('--got inquiry', inquiry)
        dispatch(setAdminCurrentInquiry(inquiry))
      })
      .catch(error => dispatch(apologize(error)))
  }
}
