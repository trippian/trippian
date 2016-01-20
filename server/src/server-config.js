import express from 'express';
import db from './db/db';

let app = express();

import middleware from './middleware/middleware';

middleware(app, express);

export default app;