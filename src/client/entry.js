import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router'
import routes from './config/routes'

import {
  IntlProvider
}
from 'react-intl'


ReactDOM.render(
  <IntlProvider locale='en'>
        <Router>{routes}</Router>
    </IntlProvider>,
  document.getElementById('app'))
