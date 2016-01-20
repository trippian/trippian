import {
  createStore
}
from 'redux'

import {
  Map
}
from 'immutable'

const SET_DESTINATIONS = 'SET_DESTINATIONS'
const SET_TRIPPIANS = 'SET_TRIPPIANS'
const GET_DESTINATION_BY_ID = 'GET_DESTINATION_BY_ID'
const GET_TRIPPIAN_BY_ID = 'GET_TRIPPIAN_BY_ID'
const GET_DESTINATIONS = 'GET_DESTINATIONS'
const GET_TRIPPIANS = 'GET_TRIPPIANS'

const getInitialState = () => {
  return new Map({
    trippians: [],
    destinations: []
  })
}


function apiTrippianReducer(state = getInitialState(), action) {
  switch (action.type) {
    case SET_DESTINATIONS:
      return state.merge(new Map({
        destinations: action.data.destinations
      }))
    default:
      return state
  }
}

export default createStore(apiTrippianReducer)
