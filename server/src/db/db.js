<<<<<<< 6d3b0f11ee3f973f1fa59b4a5e868db2b33f8477
const neo4j = require('node-neo4j');
var config = require('../../../src/shared/config/config')
var DATABASE_URI = process.env.GRAPHSTORY_URL || require('../../../src/shared/config/config').neo4j;
var db = new neo4j(DATABASE_URI);
=======
const Seraph = require('seraph');
const Promise = require('bluebird');
let config = require('../config/config.js');
let DATABASE_URI = process.env.GRAPHSTORY_URL || require('../config/config.js').neo4j;

let db = Seraph(DATABASE_URI);

db = Promise.promisifyAll(db);
>>>>>>> feat(server): working on all database models

module.exports = db;
