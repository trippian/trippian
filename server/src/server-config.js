const express = require('express');
const db = require('./db/db.js');

let app = express();

require('./middleware/middleware.js')(app, express);

module.exports = app;