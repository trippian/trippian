import {
  createStore, combineReducers, applyMiddleware
}
from 'redux'
import thunk from 'redux-thunk'
import {
  reducer as form
}
from 'redux-form'
import appState from './reducers/appStateReducer'

import apiTrippian from './reducers/apiTrippianReducer'
import apiAdmin from './reducers/apiAdminReducer'


let createStoreWithMiddleware

// createStoreWithMiddleware = applyMiddleware(
//   thunk
// )(createStore)


import {
  log as appConfig
}
from '../config/appConfig'
import createLogger from 'redux-logger' // comment this out for translation or deployment
  // based on if it's translation mode, turn on/off logger 
if (appConfig.isTranslationMode) {
  createStoreWithMiddleware = applyMiddleware(
    thunk
  )(createStore)
} else {
  // add thunk as middleware to support aync dispatch 
  const logger = createLogger()
  createStoreWithMiddleware = applyMiddleware(
    thunk, logger
  )(createStore)
}

// combine all reducers 
const reducer = combineReducers({
  apiTrippian,
  apiAdmin,
  appState,
  form
})

export default createStoreWithMiddleware(reducer)
