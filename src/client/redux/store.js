import {
  createStore
}
from 'redux'

const GET_DESTINATION_BY_ID = 'GET_DESTINATION_BY_ID'
const GET_TRIPPIAN_BY_ID = 'GET_TRIPPIAN_BY_ID'
const GET_DESTINATIONS = 'GET_DESTINATIONS'
const GET_TRIPPIANS = 'GET_TRIPPIANS'

const initialState = {
  trippians: [],
  destinations: []
}

function apiTrippianReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DESTINATION_BY_ID:
      return
  }
}
