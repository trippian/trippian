import React, {
  Component, PropTypes
}
from 'react'
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
        <Route path="/" component={App}>
            <Route path="trippian/:id" component={TrippianDetail} >
            </Route>
            <Route path="about" component={About} />
            <Route path="login" component={Login} />
            <IndexRoute component={Home}/>
        </Route>
    </Router>
)
