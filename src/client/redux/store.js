import {
  createStore, combineReducers
}
from 'redux'
import {
  reducer as formReducer
}
from 'redux-form'

import appStateReducer from './reducers/appStateReducer'
import apiTrippianReducer from './reducers/apiTrippianReducer'

// combine all reducers 
const reducer = combineReducers({
  apiTrippian: apiTrippianReducer,
  appState: appStateReducer,
  form: formReducer
})

export default createStore(reducer)
