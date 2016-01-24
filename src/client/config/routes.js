import React from 'react'
import {
  Router, Route, IndexRoute, browserHistory
}
from 'react-router'

import {
  App, Home, About, DestinationDetail, DestinationPost, InquiryAdd, InquiryList,
  InquiryDetail, JoinUs, Login, NotFound, Press,
  Terms, TrippianDetail, TrippianSignUp, TrippianList, TrippianEdit, IntlDemo
}
from '../containers/index'

import store from '../redux/store'

export default (
  <Router history={browserHistory}>
        <Route component={App} path="/" store={store} >
            <Route component={About}  path="about" />
            <Route component={DestinationDetail} path="destination/:id" />
            <Route component={DestinationPost} path="destination-post" />
            <Route component={JoinUs} path="join-us"  />
            <Route component={InquiryAdd} path="contact"  />
            <Route component={InquiryDetail} path="inquiry/:id"  />
            <Route component={InquiryList} path="my-inquiries"  />
            <Route component={IntlDemo} path="intl"  />
            <Route component={Login} path="login"  />
            <Route component={NotFound} path="not-found"  />
            <Route component={Press} path="press"  />
            <Route component={Terms} path="terms"  />
            <Route component={TrippianDetail} path="trippian/:id" />
            <Route component={TrippianSignUp} path="become-a-trippian" />
            <Route component={TrippianList} path="trippian" />
            <Route component={TrippianEdit} path="trippian-edit"  />
            <IndexRoute component={Home}/>
        </Route>
    </Router>
)
