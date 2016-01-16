const neo4j = require('neo4j');
var config = require('../config/config.js');
var DATABASE_URI = process.env.GRAPHSTORY_URL || require('../config/config.js').neo4j;
var db = new neo4j.GraphDatabase(DATABASE_URI);

module.exports = db;