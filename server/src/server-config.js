import express from 'express';
import db from './db/db';

export let app = express();

require('./middleware/middleware.js')(app, express);

