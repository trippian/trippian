require('es6-promise').polyfill()
require('isomorphic-fetch')

const get = (url) => (
  fetch(url)
  .then((res) =>
    res.json()
  )
)

// default to json format
const post = (url, data) => {
  fetch(url, {
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(data)
  })
    .then((res) =>
      res.json()
    )
}


export default {
  get: get,
  post: post
}
