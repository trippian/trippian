import React from 'react'
import {
  Router, Route, IndexRoute, browserHistory
}
from 'react-router'

import {
  App, Home, About, JoinUs, Login, NotFound, Press,
  Destination, DestinationDetail, DestinationPost, Contact,
  InquiryAdd, InquiryDetail, InquiryList,
  DestinationWrapper, PopularDestinations, DestinationSearchResults, Trippian,
  Terms, TrippianDetail, TrippianSignUp, TrippianList, TrippianEdit, IntlDemo,
  Admin, AdminDestinationList, AdminDestinationListItem, AdminDestinationListItemEdit,
  AdminTrippianList, AdminTrippianListItem, AdminTrippianListItemEdit, AdminInquiryList, AdminTripList,
  AdminInquiryListItem, AdminInquiryListItemEdit,
  AdminTripListItem, AdminTripListItemEdit,
  AdminUserList, AdminUserListItem, AdminUserListItemEdit
}
from '../containers/index'


export default (
  <Router history={browserHistory}>
        <Route component={App} path="/">
            <Route component={About}  path="about" />
            <Route component={DestinationPost} path="destination-post" />
            <Route component={JoinUs} path="join-us"  />
            <Route component={InquiryDetail} path="inquiry/:id"  />
            <Route component={InquiryList} path="my-inquiries"  />
            <Route component={IntlDemo} path="intl"  />
            <Route component={Login} path="login"  />
            <Route component={NotFound} path="not-found"  />
            <Route component={Press} path="press"  />
            <Route component={Terms} path="terms"  />

            <Route component={DestinationWrapper} path="destination" >
              <Route component={Destination} path=":id" >
                <IndexRoute component={DestinationDetail}/>
                // may add some route later 
              </Route>
              <Route component={DestinationSearchResults} path="search/:q"  />
              <IndexRoute component={PopularDestinations}/>
            </Route>

            <Route component={Trippian} path="trippian/:id" >
              <Route component={Contact} path="contact"  />
              <IndexRoute component={TrippianDetail}/>
            </Route>

            <Route component={TrippianSignUp} path="become-a-trippian" />
            <Route component={TrippianList} path="trippian" />
            <Route component={TrippianEdit} path="trippian-edit"  />
            <Route component={Admin} path="admin">

                <Route component={AdminTrippianList} path="trippian" />
                <Route component={AdminTrippianListItem} path="trippian/:id" />
                <Route component={AdminTrippianListItemEdit} path="trippian/:id/edit" />
                

                <Route component={AdminTripList} path="trip"  />
                <Route component={AdminTripListItem} path="trip/:id"  />
                <Route component={AdminTripListItemEdit} path="trip/:id/edit"  />


                <Route component={AdminDestinationList} path="destination" />
                <Route component={AdminDestinationListItem} path="destination/:id" />
                <Route component={AdminDestinationListItemEdit} path="destination/:id/edit" />

                <Route component={AdminInquiryList} path="inquiry"  />
                // <Route component={AdminInquiryListItem} path="inquiry/:id"  />
                // <Route component={AdminInquiryListItemEdit} path="inquiry/:id/edit"  />

                <Route component={AdminUserList} path="user"  />
                <Route component={AdminUserListItem} path="user/:id"  />
                <Route component={AdminUserListItemEdit} path="user/:id/edit"  />

                <IndexRoute component={AdminDestinationList}/>
            </Route>
            <IndexRoute component={Home}/>
        </Route>
    </Router>
)
