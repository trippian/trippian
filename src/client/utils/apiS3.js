import api from '../../shared/api/fetch'
import {
  API_HOST, Server_HOST, routeConfig
}
from '../config/appConfig'

export const getS3SignedURL = (file) => {
  const url = `${Server_HOST}${routeConfig.s3}?name=${file.name}&type=${file.type}`
  console.log('getS3SignedURL', url)
  return api.get(url)
}

export const putS3File = (signedUrl, file) => {
  console.log('posting file to S3 now', signedUrl)
  return api.putFile(signedUrl, file)
}

export default {
  getS3SignedURL,
  putS3File
}
