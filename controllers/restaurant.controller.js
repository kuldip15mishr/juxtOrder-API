
var nano = require('nano')('http://127.0.0.1:5984/');
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
