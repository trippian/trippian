const Seraph = require('seraph');
const Promise = require('bluebird');
let config = require('../config/config.js');
let DATABASE_URI = process.env.GRAPHSTORY_URL || require('../config/config.js').neo4j;

let db = Seraph(DATABASE_URI);

db = Promise.promisifyAll(db);

module.exports = db;