import {
  SET_ADMIN_DESTINATIONS, SET_ADMIN_TRIPPIANS,
  GET_DESTINATIONS_FAIL, GET_DESTINATION_BY_ID, GET_TRIPPIAN_BY_ID, GET_DESTINATIONS, GET_TRIPPIANS,
  REMOVE_ADMIN_DESTINATION, SET_ADMIN_CURRENT_DESTINATION
}
from '../actionTypes'
import {
  setAdminDestinations, setAdminTrippians, apologize, removeAdminDestination, removeDestination,
  setAdminCurrentDestination
}
from '../actionCreators'

import {
  Map
}
from 'immutable'
import {
  fetchGetTrippians, fetchGetDestinations, fetchDeleteDestinationById,
  fetchGetDestinationById
}
from '../../utils/apiTrippian'

const initialState = new Map({
  adminTrippians: [],
  adminDestinations: [],
  currentTrippian: {},
  currentDestination: {
    destinationName: '',
    destinationDescription: '',
    destinationImage: 'http://lorempixel.com/400/200/city/',
    whyVisit: ''
  },
  loaded: false,
  error: ''
})

import store from '../store'

export default function apiTrippianReducer(state = initialState, action) {
  console.log('dispatching', action.type, action.payload)
  switch (action.type) {
    case SET_ADMIN_DESTINATIONS:
      return state.merge(new Map({
        adminDestinations: action.payload.destinations
      }))
    case SET_ADMIN_TRIPPIANS:
      return state.merge(new Map({
        adminTrippians: action.payload.trippians
      }))
    case GET_DESTINATIONS_FAIL:
      return state.merge(new Map({
        loaded: false,
        loading: false,
        error: action.payload.errorMessage
      }))
    case REMOVE_ADMIN_DESTINATION:
      const id = action.payload.id
      let oldDestinations = state.get('adminDestinations')
      oldDestinations = oldDestinations.filter(x => x.id !== id)
      return state.merge(new Map({
        adminDestinations: oldDestinations
      }))

    case SET_ADMIN_CURRENT_DESTINATION:
      return state.merge(new Map({
        currentDestination: action.payload.destination
      }))

    default:
      return state
  }
}
export function getAdminDestinations() {
  return (dispatch) => {
    return fetchGetDestinations()
      .then((destinations) => {
        dispatch(setAdminDestinations(destinations))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

export function getAdminTrippians() {
  return (dispatch) => {
    return fetchGetTrippians()
      .then(trippians => dispatch(setAdminTrippians(trippians)))
      .catch(error => dispatch(apologize(error)))
  }
}

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
