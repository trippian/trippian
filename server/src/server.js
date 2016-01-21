import app from './server-config.js';

// test on env config, remove later 
require('dotenv').config();
console.log('env', process.env.neo4j, process.env.HOST, process.env.FACEBOOK_APP_ID);

let port = process.env.PORT || 4000;

app.set('port', port);

app.listen(port);
console.log('listening on port: ', port);
