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

export const fetchUpdateUserById = (id) => {
  const url = `${API_HOST}${routeConfig.user}/${id}`
  console.log('fetchUpdateUserById', url, id)
  return api.put(url, id)
}


//Rating & Review 
export const fetchPostReview = (data) => {
  const url = `${API_HOST}${routeConfig.review}/${data.trippianId}?rater=${data.userId}`
  console.log('fetchPostTrippian', url, data)
  return api.post(url, data)
}

export const getS3SignedURL = (file) => {
  const url = `${Server_HOST}${routeConfig.s3}?file_name=${file.name}&file_type=${file.type}`
  console.log('getS3SignedURL', url)
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
