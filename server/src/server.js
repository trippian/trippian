const app = require('./server-config.js');

const port = process.env.PORT || 3000;

app.set('port', port);

app.listen(port);
console.log('listening on port: ', port);