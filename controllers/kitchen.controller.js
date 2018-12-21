var config = require('../config/constant');
var moment = require('moment')
var nano = require('nano')(config.apiURL.COUCHDB_URL_SERVER);
var db = nano.db.use('juxtorder');



exports.getCurrentOrder = async (req, res, next) => {
    try {

        var rid = req.params.rid ? req.params.rid : "";
        var cid = req.params.cid ? req.params.cid : "";
 
        db.view('order', 'orderByRestaurant', {
            //key: ["",rid, cid]
            key: null
        }, function (err, body) {
            if (err) console.log(err);

            return res.json(body)
        });

    } catch (error) {
        return next(error)
    }
}

exports.UpdateOrderStatus = async (req, res, next) => {
    try {

        var id = req.params.id ? req.params.id : "";
        var postparams =req.body;
        var updateVal={};
        db.view('order', 'OrderByID', {
            key: id
        }, function (err, body) {
            if (err) console.log(err);
            if(body && body.rows && body.rows.length >0){
                updateVal  =body.rows[0].value;
            }
         
               
                    updateVal[postparams.key]=postparams.value;
                    db.insert(updateVal, id, function (err, response, header) {
                        if (!err) {
                           console.log(response);
                           return res.json(body)
                        }
                    })
                
          
            
        });

    } catch (error) {
        return next(error)
    }
}