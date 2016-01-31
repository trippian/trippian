import api from '../../shared/api/fetch'
import axios from 'axios'

import {
  API_HOST, Server_HOST, routeConfig
}
from '../config/appConfig'

export const getS3SignedURL = (file) => {
    const url = `${Server_HOST}${routeConfig.s3}?name=${file.name}&type=${file.type}&path=${file.path}`
    console.log('getS3SignedURL', url)
    return api.get(url)
  }
  // unfortunately fetch doesn't support PUT request at this case, have to use axios
export const putS3File = (signedUrl, file) => {
  console.log('posting file to S3 now', signedUrl)
  return axios.put(signedUrl, file, {
    headers: {
      'Content-Type': file.type
    }
  })
}

export default {
  getS3SignedURL,
  putS3File
}
