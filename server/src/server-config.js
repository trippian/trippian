import express from 'express';
import db from './db/db';
import middleware from './middleware/middleware';

let app = express();

middleware(app, express);

export default app;