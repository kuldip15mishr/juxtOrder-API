
var nano = require('nano')('http://127.0.0.1:5984/');
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


exports.getUserByID = async (req, res, next) => {
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