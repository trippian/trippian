import express from 'express'
import db from './db/db'
import middleware from './middleware/middleware'
import http from 'http'
// import socket from './socket/socket'

let app = express()
let server = http.Server(app)

// socket(server)
middleware(app)

export default server