import {
  createStore, combineReducers, applyMiddleware
}
from 'redux'
import thunk from 'redux-thunk'
import {
  reducer as form
}
from 'redux-form'
import createLogger from 'redux-logger'
import appState from './reducers/appStateReducer'

import apiTrippian, {
  getPopularDestinations,
  getPopularTrippians
}
from './reducers/apiTrippianReducer'


// combine all reducers 
const reducer = combineReducers({
  apiTrippian,
  appState,
  form
})

// export default createStore(reducer)

// const logger = createLogger()
// add thunk as middleware to support aync dispatch 
const createStoreWithMiddleware = applyMiddleware(
  // thunk, logger
  thunk
)(createStore)
export default createStoreWithMiddleware(reducer)

// add all reducer functions to the store export 
export {
  getPopularDestinations,
  getPopularTrippians
}
