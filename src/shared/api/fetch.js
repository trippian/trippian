require('es6-promise').polyfill()
require('isomorphic-fetch')

// a test remote url to make sure the get api is working
// const mURL = 'http://api.themoviedb.org/3/movie/popular?api_key=87380c54ae472259aade42db22a24d89'

// in order to use ismorphic fetch, the server must support cors;
const get = (url) => {
  return fetch(url)
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad response from server')
      }
      // console.log('*** got data from fetch', res)
      return res.json()
    })
    .catch(function (error) {
      console.log('posting failed at fetch', error)
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
        throw new Error('Bad response from server')
      }
      return res.json()

    })
    .catch(function (error) {
      console.log('posting failed at fetch', error)
    })
}

const deleteApi = (url) => {
  return fetch(url, {
      method: 'delete'
    })
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad response from server')
      }
      return res.json()

    })
    .catch(function (error) {
      console.log('deleting failed at fetch', error, url)
    })
}

export default {
  get,
  post,
  deleteApi
}
