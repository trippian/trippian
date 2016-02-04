import api from '../../shared/api/fetch'
import {
  API_HOST, Server_HOST, routeConfig
}
from '../config/appConfig'
  // import config from '../../shared/config/config'


//DESTINATION

export const fetchGetDestinations = () => {
  const url = `${API_HOST}${routeConfig.destination}`
  console.log('fetchGetDestinations', url)
  return api.get(url)
}

export const fetchGetDestinationById = (id) => {
  const url = `${API_HOST}${routeConfig.destination}/${id}`
  console.log('fetchGetDestinationById', url, id)
  return api.get(url)
}

export const fetchGetDestinationByName = (name) => {
  const url = `${API_HOST}${routeConfig.destination}?q=${name}`
  console.log('fetchGetDestinationById', url, name)
  return api.get(url)
}

export const fetchGetDestinationsByCategory = (category = 'popular') => {
  const url = `${API_HOST}${routeConfig.destination}?cat=${category}`
  console.log('fetchGetDestinationsByCategory', url, category)
  return api.get(url)
}

export const fetchPostDestination = (data) => {
  const url = `${API_HOST}${routeConfig.destination}`
  console.log('fetchPostDestination', url, data)
  return api.post(url, data)
}

export const fetchDeleteDestinationById = (id) => {
  const url = `${API_HOST}${routeConfig.destination}/${id}`
  console.log('fetchDeleteDestinationById', url)
  return api.deleteApi(url)
}





//INQUIRY

export const fetchGetInquiries = () => {
  const url = `${API_HOST}${routeConfig.inquiry}`
  console.log('fetchGetInquiries', url)
  return api.get(url)
}

// export const fetchGetInquiryById = (id) => {
//   const url = `${API_HOST}${routeConfig.inquiry}/${id}`
//   console.log('fetchGetInquiryById', url, id)
//   return api.get(url, id)
// }

export const fetchGetInquiryByReceiverId = (id) => {
  const url = `${API_HOST}${routeConfig.inquiry}/${id}`
  console.log('fetchGetInquiryByReceiverId', url, id)
  return api.get(url, id)
}

export const fetchPostInquiry = (data) => {
  const url = `${API_HOST}${routeConfig.inquiry}/${data.trippianId}`
  console.log('fetchPostInquiry', url, data)
  return api.post(url, data)
}

export const fetchDeleteInquiryById = (id) => {
  const url = `${API_HOST}${routeConfig.inquiry}/${id}`
  console.log('fetchDeleteInquiryById', url, id)
  return api.deleteApi(url)
}

export const fetchUpdateInquiry = (id, data) => {
  const url = `${API_HOST}${routeConfig.inquiry}/${id}`
  console.log('fetchUpdateInuqiry', id, data)
  return api.put(url, data, id)
}

//TRIP
export const fetchGetTrips = () => {
  const url = `${API_HOST}${routeConfig.trip}`
  console.log('fetchUpdateInuqiry', url)
  return api.get(url)
}

export const fetchGetTripById = (id) => {
  const url = `${API_HOST}${routeConfig.trip}/${id}`
  console.log('fetchGetTripById', url, id)
  return api.get(url, id)
}

export const fetchDeleteTripById = (id) => {
  const url = `${API_HOST}${routeConfig.trip}/${id}`
  console.log('fetchDeleteTripById', url)
  return api.deleteApi(url)
}

export const fetchUpdateTrip = (id, data) => {
  const url = `${API_HOST}${routeConfig.trip}/${id}`
  console.log('fetchUpdateTrip', id, data)
  return api.put(url, data, id)
}

export const fetchPostTrip = (data) => {
  const url = `${API_HOST}${routeConfig.trip}/${data.userId}`
  console.log('fetchPostTrip', url, data)
  return api.post(url, data)
}

//save trip 
export const fetchUpdateSave = ({
  userId, tripId, saveState
}) => {
  const url = `${API_HOST}${routeConfig.saveTrip}/${userId}?tripId=${tripId}`
  console.log('inside fetchUpdateSave', url, tripId, saveState)
  return api.post(url)
}

// Trippian
export const fetchGetTrippians = () => {
  const url = `${API_HOST}${routeConfig.trippian}`
  console.log('fetchGetTrippians', url)
  return api.get(url)
}

export const fetchGetTrippianById = (id) => {
  const url = `${API_HOST}${routeConfig.user}/${id}`
  console.log('fetchGetTrippianById', url, id)
  return api.get(url)
}

export const fetchDeleteTrippianById = (id) => {
  const url = `${API_HOST}${routeConfig.user}/${id}`
  console.log('fetchDeleteTrippianById', url, id)
  return api.deleteApi(url)
}

export const fetchPostTrippian = (data) => {
  data.trippian = true
  const url = `${API_HOST}${routeConfig.user}`
  console.log('fetchPostTrippian', url, data)
  return api.post(url, data)
}


//Rating & Review 
export const fetchPostReview = (data) => {
  const url = `${API_HOST}${routeConfig.review}/${data.trippianId}?rater=${data.userId}`
  console.log('fetchPostTrippian', url, data)
  return api.post(url, data)
}

//curl -X PUT -d "userId=8" http://localhost:4000/api/trip/51/?voteType=UPVOTE
export const fetchUpdateVote = ({
  userId, tripId, vote = 1
}) => {
  console.log('in fetch', userId, tripId, vote)
  if (vote !== -1 && vote !== 1) {
    console.log('unexpected vote, should be 1 or -1')
    return
  }
  const voteType = vote === -1 ? 'DOWNVOTE' : 'UPVOTE'
  const url = `${API_HOST}${routeConfig.trip}/${tripId}?voteType=${voteType}`
  console.log('fetchPostTrippian', url, userId, tripId, voteType)
  return api.put(url, {
    userId: userId
  })
}

//USER
export const fetchGetTrippiansByCategory = (category = 'popular') => {
  const url = `${API_HOST}${routeConfig.trippian}?cat=${category}`
  console.log('fetchGetTrippiansByCategory', url, category)
  return api.get(url)
}

export const fetchGetUsers = () => {
  const url = `${API_HOST}${routeConfig.user}`
  console.log('fetchGetAllUsers', url)
  return api.get(url)
}

export const fetchGetUserById = (id) => {
  const url = `${API_HOST}${routeConfig.user}/${id}`
  console.log('fetchGetUserById', url, id)
  return api.get(url)
}

export const fetchDeleteUserById = (id) => {
  const url = `${API_HOST}${routeConfig.user}/${id}`
  console.log('fetchDeleteUserById', url, id)
  return api.deleteApi(url)
}

//TODO
export const fetchUpdateUserById = (id) => {
    const url = `${API_HOST}${routeConfig.user}/${id}`
    console.log('fetchUpdateUserById', url, id)
    return api.put(url, id)
  }
  //LOGIN/SIGNUP
export const fetchPostLogin = (data) => {
  const url = `${Server_HOST}/auth/login`
  console.log('fetchPostLogin', url, data)
  return api.post(url, data)
}

export const fetchPostSignup = (data) => {
  const url = `${Server_HOST}/auth/signup`
  console.log('fetchPostSignup', url, data)
  return api.post(url, data)
}

export const fetchLogin = (type = 'facebook') => {
  let url = routeConfig.facebookAuth
  if (type === 'google') {
    url = routeConfig.googleAuth
  }
  console.log('fetchLogin', url)
  return api.get(url)
}

export const fetchLogout = () => {
  var url = routeConfig.logout
  console.log('fetchLogout', url)
  return api.get(url)
}

// Dashboard 
export const fetchGetDashboardById = (id) => {
  const url = `${API_HOST}${routeConfig.dashboard}/${id}`
  console.log('fetchGetDashboardById', url, id)
  return api.get(url)
}

// POST /api/destination
// URL encoded POST request
// send parameters: destinationName, destinationDescription, whyVisit, destinationImage
// returns created destination with id and empty popularTrips property
//curl -X POST -d "destinationName=San Francisco, CA&destinationDescription=a cool city&whyVisit=there is a lot of historical sites&destinationImage=http://lorempixel.com/400/200/" http://localhost:4000/api/destination
const defaultDestinationData = {
  destinationName: 'Beijing',
  destinationDescription: 'A beautiful and vibrant city',
  destinationImage: 'http://lorempixel.com/800/600/city/',
  whyVisit: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum excepturi ducimus ab veniam est, pariatur recusandae cum voluptatem, maiores perferendis!'
}
