import log from './log'
import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router'
import routes from './config/routes'
import store from './redux/store'
import {
  Provider
}
from 'react-redux'
import {
  IntlProvider
}
from 'react-intl'

import {
  initApp
}
from '../shared/utils/clientAppSetup'
initApp()

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'))


// TODO: remove below at certain point
// let locale = store.getState().appState.get('locale') || getLocaleFromQueryString(window.location.search)
// let messages = store.getState().appState.get('messages')


// IntlProvider is not necessary since we are managing the locale and messages in App component 
// but keep it here just in case 
// ReactDOM.render(
//   <IntlProvider locale={locale} messages={messages}>
//         <Router>{routes}</Router> 
//     </IntlProvider>,
//   document.getElementById('app'))
