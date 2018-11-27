
var config = require('../config/constant');

var nano = require('nano')(config.apiURL.COUCHDB_URL_LOCALHOST);
var db = nano.db.use('juxtorder');



exports.addRestaurant = async (req, res, next) => {
  try {
    db.insert(req.body, function(err, body){
      if(!err){
        return res.json(body)
      }
    });
    
  } catch (error) {
    return next(error)
  }
}
