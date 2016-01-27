import Seraph from 'seraph'
import Promise from 'bluebird'
require('dotenv').config()

let DATABASE_URI = process.env.GRAPHSTORY_URL

export default Promise.promisifyAll(Seraph({
  server: DATABASE_URI,
  user: process.env.DATABASE_USERNAME,
  pass: process.env.DATABASE_PASSWORD
}))
