import app from './server-config.js';

let port = process.env.PORT || 4000;

app.set('port', port);

app.listen(port);
console.log('listening on port: ', port);
