import express from 'express';
import db from './db/db';

let app = express();

require('./middleware/middleware.js')(app, express);

module.exports = app;