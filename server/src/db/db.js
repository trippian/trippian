const Seraph = require('seraph');
const Promise = require('bluebird');
let config = require('../../../src/shared/config/config');
let DATABASE_URI = process.env.GRAPHSTORY_URL || require('../../../src/shared/config/config').neo4j;

let db = Seraph(DATABASE_URI);

db = Promise.promisifyAll(db);

module.exports = db;
