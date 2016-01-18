import React from 'react'
import {
  Router, Route, IndexRoute, browserHistory
}
from 'react-router'

import {
  App, Home, About, TrippianDetail, Login, JoinUs, Press, Terms
}
from '../containers/index'

export default (
  <Router history={browserHistory}>
        <Route component={App} path="/" >
            <Route component={About}  path="about" />
            <Route component={Login} path="login"  />
            <Route component={JoinUs} path="join-us"  />
            <Route component={Press} path="press"  />
            <Route component={Terms} path="terms"  />
            <Route  component={TrippianDetail} path="trippian/:id" />
            <IndexRoute component={Home}/>
        </Route>
    </Router>
)
