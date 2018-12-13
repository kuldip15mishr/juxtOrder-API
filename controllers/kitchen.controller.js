var config = require('../config/constant');

var nano = require('nano')(config.apiURL.COUCHDB_URL_SERVER);
var db = nano.db.use('juxtorder');



exports.getCurrentOrder = async (req, res, next) => {
    try {
  
        var rid = req.params.rid ?req.params.rid :"";
        var cid =req.params.cid ?req.params.cid :"";
        
           db.view('order', 'orderByRestaurant', {key: [rid,cid]}, function(err, body) {
               if (err) console.log(err);
              
                 return res.json(body)
             });
         
       } catch (error) {
         return next(error)
       }
}
