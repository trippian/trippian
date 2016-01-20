import api from '../../shared/api/fetch'
import {
  routeConfig
}
from '../config/appConfig'

import config from '../../shared/config/config'
export const getDestinationById = (id) => {
  const url = `${config.API_HOST}${routeConfig.destination}${id}`
  return api.get(url)
}

export const getTrippianById = (id) => {
  const url = `${config.API_HOST}${routeConfig.trippian}${id}`
  return api.get(url)
}
