var neo4j = require('neo4j');
var config = require('../config/config.js');
var DATABASE_URI = config.neo4j || process.env.GRAPHSTORY_URL;
var db = new neo4j.GraphDatabase(DATABASE_URI);

module.exports = db;