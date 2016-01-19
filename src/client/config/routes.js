import React from 'react'
import {
  Router, Route, IndexRoute, browserHistory
}
from 'react-router'

import {
  App, Home, About, DestinationDetail, InquiryList,
  InquiryDetail, JoinUs, Login, NotFound, Press,
  Terms, TrippianDetail, TrippianSignUp, TrippianList
}
from '../containers/index'

export default (
  <Router history={browserHistory}>
        <Route component={App} path="/" >
            <Route component={About}  path="about" />
            <Route component={DestinationDetail} path="destination/:id" />
            <Route component={JoinUs} path="join-us"  />
            <Route component={InquiryDetail} path="inquiry/:id"  />
            <Route component={InquiryList} path="inquiry"  />
            <Route component={Login} path="login"  />
            <Route component={NotFound} path="not-found"  />
            <Route component={Press} path="press"  />
            <Route component={Terms} path="terms"  />
            <Route component={TrippianDetail} path="trippian/:id" />
            <Route component={TrippianSignUp} path="become-a-trippian" />
            <Route component={TrippianList} path="trippian" />
            <IndexRoute component={Home}/>
        </Route>
    </Router>
)
