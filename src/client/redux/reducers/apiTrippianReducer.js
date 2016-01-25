const SET_DESTINATIONS = 'apiTrippian.SET_DESTINATIONS'
const SET_TRIPPIANS = 'apiTrippian.SET_TRIPPIANS'
const GET_DESTINATIONS_FAIL = 'apiTrippian.GET_DESTINATIONS_FAIL'
const GET_DESTINATION_BY_ID = 'apiTrippian.GET_DESTINATION_BY_ID'
const GET_TRIPPIAN_BY_ID = 'apiTrippian.GET_TRIPPIAN_BY_ID'
const GET_DESTINATIONS = 'apiTrippian.GET_DESTINATIONS'
const GET_TRIPPIANS = 'apiTrippian.GET_TRIPPIANS'

import {
  Map
}
from 'immutable'
import {
  getTrippians, getDestinations
}
from '../../utils/apiTrippian'
const initialState = new Map({
  trippians: [],
  destinations: [],
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

    default:
      return state
  }
}

function setDestinations(destinations) {
  return {
    type: SET_DESTINATIONS,
    payload: {
      destinations
    }
  }
}

function setTrippians(trippians) {
  return {
    type: SET_TRIPPIANS,
    payload: {
      trippians
    }
  }
}

function apologize(errorMessage) {
  return {
    type: GET_DESTINATIONS_FAIL,
    payload: {
      errorMessage: errorMessage
    }
  }
}
export function getPopularDestinations() {
  return (dispatch) => {
    return getDestinations('popular')
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
    return getTrippians('popular')
      .then(trippians => dispatch(setTrippians(trippians)))
      .catch(error => dispatch(apologize(error)))
  }
}
