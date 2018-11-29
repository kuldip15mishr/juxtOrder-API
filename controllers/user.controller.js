
var config = require('../config/constant');

var nano = require('nano')(config.apiURL.COUCHDB_URL_SERVER);
var db = nano.db.use('juxtorder');


exports.addUser = async (req, res, next) => {
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
exports.getAllUser = async (req, res, next) => {
  try {

   var id = req.params.id ? req.params.id :0;
   
      db.view('AllUser', 'alluser', {}, function(err, body) {
          if (err) console.log(err);
         
            return res.json(body)
        });
    
  } catch (error) {
    return next(error)
  }
}
exports.authentication= async (req, res, next) => {
  try {

   var id = req.body.email;
   
      db.view('auth', 'authentication', {key: id}, function(err, body) {
          if (err) console.log(err);
         if(body && body.rows && body.rows.length >0){
           var record = body.rows[0].value;
           if( record && record.password === req.body.password){
            return res.json({status :'success'})
           }else{
            return res.json({status :'fail'})
           }
         }
            
        });
    
  } catch (error) {
    return next(error)
  }
}
exports.getUserByID = async (req, res, next) => {
    try {
  
     var id = req.params.id ? req.params.id :0;
     
        db.view('byUserid', 'new-view', {key: id}, function(err, body) {
            if (err) console.log(err);
           
              return res.json(body)
          });
      
    } catch (error) {
      return next(error)
    }
  }