import log from '../../log'
import {
  FETCH_REMOTE_RESOURCE_FAIL, REMOVE_INQUIRY, REMOVE_TRIP, ADD_TRIP,
  SET_DESTINATIONS, SET_TRIPPIANS, GET_DESTINATIONS_FAIL, GET_DESTINATION_BY_ID, GET_TRIPPIAN_BY_ID, GET_DESTINATIONS, GET_TRIPPIANS,
  ADD_DESTINATION, ADD_ADMIN_DESTINATION, REMOVE_DESTINATION,
  SET_TRIPPIAN, SET_DESTINATION, ADD_REVIEW, SET_INQUIRY, SET_TRIP, UPDATE_VOTE, SET_DASHBOARD
}
from '../actionTypes'

import {
  Map
}
from 'immutable'

import * as initialStateData from '../initalState'

const initialState = new Map({
  currentUser: initialStateData.user,
  currentReview: initialStateData.review,
  dashboard: initialStateData.dashboard,
  trippians: [],
  destinations: [],
  newDestinations: [],
  newTrips: [], // since many places may need to update trips, better to keep it in a separate place. If needed, view can merge this data into exisiting data
  loaded: false,
  error: '',
  destination: initialStateData.destination,
  trippian: initialStateData.trippian,
  inquiry: initialStateData.inquiry,
  // curl -X PUT -d "userId=32" http://localhost:4000/api/trip/51/?voteType=UPVOTE
  trip: initialStateData.trip
})

export default function apiTrippianReducer(state = initialState, action) {
  log.info('dispatching', action.type, action.payload)
  switch (action.type) {
    // setting 
    case SET_DESTINATIONS:
      return state.merge(new Map({
        destinations: action.payload.destinations
      }))
    case SET_TRIPPIANS:
      return state.merge(new Map({
        trippians: action.payload.trippians
      }))
    case SET_TRIPPIAN:
      return state.merge(new Map({
        trippian: action.payload.trippian
      }))
    case SET_DESTINATION:
      return state.merge(new Map({
        destination: action.payload.destination
      }))
    case SET_TRIP:
      log.info('***inside reducer, SET_TRIP', action.payload.trip)
      return state.merge(new Map({
        trip: action.payload.trip
      }))
    case SET_DASHBOARD:
      return state.set('dashboard', action.payload.dashboard)

    case SET_INQUIRY:
      return state.merge(new Map({
        inquiry: action.payload.inquiry
      }))

      // add
    case ADD_DESTINATION:
      const newDestinations = state.get('newDestinations')
      newDestinations.push(action.payload.destination)
      return state.merge(new Map({
        newDestinations: newDestinations
      }))
    case ADD_REVIEW:
      const trippianR = state.get('trippian')
      const reviews = trippianR.reviews || []
      reviews.push(action.payload.review)
      trippianR.reviews = reviews
      return state.merge(new Map({
        trippian: trippianR
      }))
    case ADD_TRIP:
      const newTrips = state.get('newTrips')
      newTrips.push(action.payload.destination)
      return state.merge(new Map({
        newTrips: newTrips
      }))

      // remove 
    case REMOVE_DESTINATION:
      const id = action.payload.id
      let destinations = state.get('destinations')
      destinations = destinations.filter(x => x.id !== id)
      return state.merge(new Map({
        destinations
      }))

      // misc.
    case UPDATE_VOTE:
      let destP = state.get('destination')
        // let popTrips = destP.popularTrips 
      destP.popularTrips.forEach(trip => {
        if (trip.id === action.payload.tripId) {
          trip.netVote += +action.payload.vote
          log.info('------ updating vote', action.payload.tripId, trip.netVote)
        }
      })
      return state.merge(new Map({
        destination: destP
      }))

      //delete
    case REMOVE_INQUIRY:
      let oldDashboard = state.get('dashboard')
      let oldInquiries1 = oldDashboard.inquiries
      oldInquiries1 = oldInquiries1.filter(x => x.id !== action.payload.id)
        // TODO (fix): since inquiry is a nested object, the data change will not trigger a view render. Try to user other update or different storage for dashboard object
      oldDashboard.inquiries = oldInquiries1
      return state.merge(new Map({
          dashboard: oldDashboard
        }))
        // doesn't work: state.updateIn(['dashboard', 'inquiries'], val => val.filter(x => x.id !== action.payload.id))

      // TODO: same as above 
    case REMOVE_TRIP:
      let oldDashboard2 = state.get('dashboard')
      let oldPostedTrips = oldDashboard2.postedTrips
      oldPostedTrips = oldPostedTrips.filter(x => x.id !== action.payload.id)

      oldDashboard2.postedTrips = oldPostedTrips
      return state.merge(new Map({
        dashboard: oldDashboard2
      }))

      //TODO: add more and move this to appState
    case GET_DESTINATIONS_FAIL:
      return state.merge(new Map({
        loaded: false,
        loading: false,
        error: action.payload.errorMessage
      }))
    default:
      return state
  }
}
