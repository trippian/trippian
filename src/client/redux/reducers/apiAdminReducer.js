import {
  SET_ADMIN_DESTINATIONS, SET_ADMIN_TRIPPIANS,
  GET_DESTINATIONS_FAIL, GET_DESTINATION_BY_ID, GET_TRIPPIAN_BY_ID, GET_DESTINATIONS, GET_TRIPPIANS,
  REMOVE_ADMIN_DESTINATION
}
from '../actionTypes'
import {
  setAdminDestinations, setAdminTrippians, apologize, removeAdminDestination, removeDestination
}
from '../actionCreators'

import {
  Map
}
from 'immutable'
import {
  getTrippians, getDestinations, fetchDeleteDestinationById
}
from '../../utils/apiTrippian'

const initialState = new Map({
  adminTrippians: [],
  adminDestinations: [],
  loaded: false,
  error: ''
})

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
    default:
      return state
  }
}
export function getAdminDestinations() {
  return (dispatch) => {
    return getDestinations()
      .then((destinations) => {
        dispatch(setAdminDestinations(destinations))
      })
      .catch(error => dispatch(apologize(error)))
  }
}

export function getAdminTrippians() {
  return (dispatch) => {
    return getTrippians()
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
