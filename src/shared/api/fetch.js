require('es6-promise').polyfill()
require('isomorphic-fetch')

const mURL = 'http://api.themoviedb.org/3/movie/popular?api_key=87380c54ae472259aade42db22a24d89'

// in order to use ismorphic fetch, the server must support cors;
const get = (url) => {
  return fetch(mURL)
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad response from server')
      }
      return res.json()
    })
}

// default to json format
const post = (url, data) => {
  return fetch(url, {
      method: 'post',
      mode: 'no-cors',
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
}


export default {
  get: get,
  post: post
}
