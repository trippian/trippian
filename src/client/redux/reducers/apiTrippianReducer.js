import {
  SET_DESTINATIONS, SET_TRIPPIANS, GET_DESTINATIONS_FAIL, GET_DESTINATION_BY_ID, GET_TRIPPIAN_BY_ID, GET_DESTINATIONS, GET_TRIPPIANS,
  ADD_DESTINATION, ADD_ADMIN_DESTINATION, REMOVE_DESTINATION
}
from '../actionTypes'
import {
  setDestinations, setTrippians, apologize, addDestination, addAdminDestination
}
from '../actionCreators'

import {
  Map
}
from 'immutable'
import {
  getTrippiansByCategory, getDestinationsByCategory, fetchPostDestination, fetchDeleteDestinationById

}
from '../../utils/apiTrippian'

const initialState = new Map({
  trippians: [],
  destinations: [],
  newDestinations: [],
  loaded: false,
  error: ''
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
    default:
      return state
  }
}
export function getPopularDestinations() {
  return (dispatch) => {
    return getDestinationsByCategory('popular')
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
    return getTrippiansByCategory('popular')
      .then(trippians => dispatch(setTrippians(trippians)))
      .catch(error => dispatch(apologize(error)))
  }
}

export function postDsestination(data) {
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
