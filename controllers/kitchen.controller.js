var config = require('../config/constant');

var nano = require('nano')(config.apiURL.COUCHDB_URL_SERVER);
var db = nano.db.use('juxtorder');



exports.getCurrentOrder = async (req, res, next) => {
    try {
  
        var id = req.params === undefined  && req.params.id ? parseInt(req.params.id) :0;
        
           db.view('byUserid', 'new-view', {key: (id)}, function(err, body) {
               if (err) console.log(err);
              
                 return res.json(body)
             });
         
       } catch (error) {
         return next(error)
       }
}
