import Seraph from 'seraph';
import Promise from 'bluebird';

let config = require('../../../src/shared/config/config');
let DATABASE_URI = process.env.GRAPHSTORY_URL || require('../../../src/shared/config/config').neo4j;

export let db = Promise.promisifyAll(Seraph(DATABASE_URI));
