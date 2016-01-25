const SET_DESTINATIONS = 'apiTrippian.SET_DESTINATIONS'
const SET_TRIPPIANS = 'apiTrippian.SET_TRIPPIANS'
const GET_DESTINATION_BY_ID = 'apiTrippian.GET_DESTINATION_BY_ID'
const GET_TRIPPIAN_BY_ID = 'apiTrippian.GET_TRIPPIAN_BY_ID'
const GET_DESTINATIONS = 'apiTrippian.GET_DESTINATIONS'
const GET_TRIPPIANS = 'apiTrippian.GET_TRIPPIANS'

import {
  Map
}
from 'immutable'

const initialState = new Map({
  trippians: [],
  destinations: []
})

export default function apiTrippianReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DESTINATIONS:
      return state.merge(new Map({
        destinations: action.payload.destinations
      }))
    default:
      return state
  }
}
