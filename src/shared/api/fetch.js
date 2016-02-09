import log from '../../client/log'
require('es6-promise').polyfill()
require('isomorphic-fetch')
  // a test remote url to make sure the get api is working
  // const mURL = 'http://api.themoviedb.org/3/movie/popular?api_key=87380c54ae472259aade42db22a24d89'

// in order to use ismorphic fetch, the server must support cors;
const get = (url) => {
  return fetch(url)
    .then((res) => {
      if (res.status >= 400) {
        log.error('bad response from server')
        throw new Error('Bad response from server')
      }
      return res.json()
    })
    .catch(function (error) {
      log.error('getting failed at fetch', error)
    })
}

// default to json format
const post = (url, data) => {
  return fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => {
      if (res.status >= 400) {
        log.error('bad response from server')
        throw new Error('Bad response from server')
      }
      return res.json()

    })
    .catch(function (error) {
      log.error('posting failed at fetch', error)
    })
}

const put = (url, data) => {
  return fetch(url, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => {
      if (res.status >= 400) {
        log.error('bad response from server')
        throw new Error('Bad response from server')
      }
      return res.json()

    })
    .catch(function (error) {
      log.error('putting failed at fetch', error)
    })
}

const deleteApi = (url) => {
  return fetch(url, {
      method: 'delete'
    })
    .then((res) => {
      if (res.status >= 400) {
        log.error('bad response from server')
        throw new Error('Bad response from server')
      }
      return res.json()
    })
    .catch((error) => {
      log.error('deleting failed at fetch', error, url)
    })
}



const putFile = (url, file) => {
  return fetch(url, {
      method: 'put',
      mode: 'no-cors',
      headers: {
        'Content-Type': file.type
      }
    })
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad response from server')
      }
      return res.json()
    })
    .catch((error) => {
      log.info('updating failed at fetch', error, url)
    })
}


export default {
  get,
  post,
  put,
  deleteApi,
  putFile
}
