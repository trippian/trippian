import api from '../../shared/api/fetch'
import {
  API_HOST, routeConfig
}
from '../config/appConfig'
  // import config from '../../shared/config/config'


export const getDestinationById = (id) => {
  const url = `${API_HOST}${routeConfig.destination}${id}`
    // console.log('destination url', url, id)
  return api.get(url)
}

export const getTrippianById = (id) => {
  const url = `${API_HOST}${routeConfig.trippian}${id}`
    // console.log('url', url, id)
  return api.get(url)
}

export const getTrippiansByCategory = (category = 'popular') => {
  const url = `${API_HOST}${routeConfig.trippian}?cat=${category}`
  console.log('trippian url', url, category)
  return api.get(url)
}

export const getDestinationsByCategory = (category = 'popular') => {
  const url = `${API_HOST}${routeConfig.destination}?cat=${category}`
  console.log('destination url', url, category)
  return api.get(url)
}

export const getTrippians = () => {
  const url = `${API_HOST}${routeConfig.trippian}`
  console.log('trippian url', url)
  return api.get(url)
}

export const getDestinations = (category = 'popular') => {
  const url = `${API_HOST}${routeConfig.destination}`
  console.log('destination url', url)
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
export const fetchPostDestination = (data) => {
  const url = `${API_HOST}${routeConfig.destination}`
  return api.post(url, data)
}

export const fetchDeleteDestinationById = (id) => {
  const url = `${API_HOST}${routeConfig.destination}${id}`
  console.log('fetcing deleting now', url)
  return api.deleteApi(url)
}
