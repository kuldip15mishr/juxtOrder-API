var config = require('../config/constant');
var nano = require('nano')(config.apiURL.COUCHDB_URL_SERVER);
var db = nano.db.use('juxtorder');



exports.addMenu = async (req, res, next) => {
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
exports.getAllMenu = async (req, res, next) => {
  try {
         db.view('menu', 'ByMenu', {}, function(err, body) {
             if (err) console.log(err);
            
               return res.json(body)
           });
       
     } catch (error) {
       return next(error)
     }
}


exports.deleteMenu   = async (req, res, next) => {
  try {

      var id = req.params.id ? req.params.id : "";
      
     
      db.view('menu', 'ByMenuID', {
          key: id
      }, function (err, body) {
          if (err) console.log(err);
          if (body && body.rows && body.rows.length > 0) {
              let rev = body.rows[0].value;
      
          db.destroy( id,rev, function (err, response, header) {
              if (!err) {
                  console.log(response);
                  return res.json(body)
              }
          })
        }



      });

  } catch (error) {
      return next(error)
  }
}