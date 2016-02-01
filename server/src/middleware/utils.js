import _ from 'lodash'

export const errorHandler = function(err, req, res) {
  res.status(500).send({error: err.message})
}

export const errorLogger = function(err, req, res, next) {
  console.error(err.stack)
  next(err)
}

export const updateStringObject = (collection, string) => {
  _.forEach(collection, (val, key) => {
    if (key === Object.keys(collection)[Object.keys(collection).length-1]) {
      if (typeof val === 'string') {
        string += `${key}:` + '"' + `${val}` + '"'
      } else {
        string += `${key}:${val}`
      }
    } else {
      if (typeof val === 'string') {
        string += `${key}:` + '"' + `${val}` + '"' + ','
      } else {
        string += `${key}:${val},`
      }
    }
  })
  return string
}
