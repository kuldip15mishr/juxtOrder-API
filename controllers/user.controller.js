
var nano = require('nano')('https://couchdb-6e2366.smileupps.com');
var db = nano.db.use('juxtorder');



exports.addUser = async (req, res, next) => {
  try {
    var data = { 
        name: 'pikachu', 
        skills: ['thunder bolt', 'iron tail', 'quick attack', 'mega punch'], 
        type: 'electric' 
    };
    
    db.insert(data, 'unique_id', function(err, body){
      if(!err){
        return res.json(body)
      }
    });
    
  } catch (error) {
    return next(error)
  }
}