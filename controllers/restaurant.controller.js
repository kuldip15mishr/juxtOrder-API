
var config = require('../config/constant');

var nano = require('nano')(config.apiURL.COUCHDB_URL_SERVER);
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


exports.getRestaurantbyuser = async (req, res, next) => {
  try {
    
       db.view('restaurantByUser', 'searchRestaurant', {}, function(err, body) {
           if (err) console.log(err);
          if(body && body.rows && body.rows.length >0){
            var record = body.rows;
            if( record ){
             return res.json({  status :'success', data :record })
            }else{
             return res.json({status :'fail'})
            }
          }
             
         });
     
   } catch (error) {
     return next(error)
   }
}

exports.getChainRestaurantByRestaurantID = async (req, res, next) => {
  try {
    let id= req.params.id;
       db.view('ChainByParentID', 'ChainRestaurant', {key: id}, function(err, body) {
           if (err) console.log(err);
          if(body && body.rows && body.rows.length >0){
            var record = body.rows;
            if( record ){
             return res.json({  status :'success', data :record })
            }else{
             return res.json({status :'fail'})
            }
          }
             
         });
     
   } catch (error) {
     return next(error)
   }
}
