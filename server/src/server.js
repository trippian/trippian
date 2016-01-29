import server from './server-config.js';

// test on env config, remove later 
require('dotenv').config();

let port = process.env.PORT || 4000;

// server.set('port', port);

server.listen(port);
console.log('listening on port: ', port);
