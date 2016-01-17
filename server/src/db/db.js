const neo4j = require('node-neo4j');
var config = require('../../../src/shared/config/config')
var DATABASE_URI = process.env.GRAPHSTORY_URL || require('../../../src/shared/config/config').neo4j;
var db = new neo4j(DATABASE_URI);

module.exports = db;
