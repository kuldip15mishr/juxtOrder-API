var config=require('../config/constant/')
var nano = require('nano')(config.apiURL.COUCHDB_URL_LOCALHOST);
var db = nano.db.use('juxtorder');


exports.db =couchDB;