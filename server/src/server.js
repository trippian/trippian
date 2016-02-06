import server from './server-config.js'

// uses dotenv to get all process env variables during development
require('dotenv').config()

let port = process.env.PORT || 4000

server.listen(port)
console.log('listening on port: ', port)
