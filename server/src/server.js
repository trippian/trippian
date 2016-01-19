import app from './server-config.js';

let port = process.env.PORT || 3000;

app.set('port', port);

app.listen(port);
console.log('listening on port: ', port);
