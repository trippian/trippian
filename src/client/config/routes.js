import React from 'react'
import {
  Router, Route, IndexRoute, browserHistory
}
from 'react-router'

import {
  App, Home, About, TrippianDetail, Login
}
from '../containers/index'

export default (
  <Router history={browserHistory}>
        <Route component={App} path="/" >
            <Route component={About}  path="about" />
            <Route component={Login} path="login"  />
            <Route  component={TrippianDetail} path="trippian/:id" />
            <IndexRoute component={Home}/>
        </Route>
    </Router>
)
