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

export const getTrippians = (category = 'popular') => {
  const url = `${API_HOST}${routeConfig.trippian}?cat=${category}`
  console.log('trippian url', url, category)
  return api.get(url)
}

export const getDestinations = (category = 'popular') => {
  const url = `${API_HOST}${routeConfig.destination}?cat=${category}`
  console.log('destination url', url, category)
  return api.get(url)
}
