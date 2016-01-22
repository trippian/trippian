import {
  createStore, combineReducers
}
from 'redux'
import {
  reducer as formReducer
}
from 'redux-form'
import {
  Map
}
from 'immutable'

//will move the reducer out of the file later 
// import apiTrippianReducer from './reducers'

//action names
const SET_DESTINATIONS = 'apiTrippian.SET_DESTINATIONS'
const SET_TRIPPIANS = 'apiTrippian.SET_TRIPPIANS'
const GET_DESTINATION_BY_ID = 'apiTrippian.GET_DESTINATION_BY_ID'
const GET_TRIPPIAN_BY_ID = 'apiTrippian.GET_TRIPPIAN_BY_ID'
const GET_DESTINATIONS = 'apiTrippian.GET_DESTINATIONS'
const GET_TRIPPIANS = 'apiTrippian.GET_TRIPPIANS'

// initialize the app state 
const getInitialState = () => {
  return new Map({
    trippians: [],
    destinations: []
  })
}

// reducer for the general trippian api 
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

// combine all reducers 
const reducer = combineReducers({
  apiTrippian: apiTrippianReducer,
  form: formReducer
})

export default createStore(reducer)
