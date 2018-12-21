var config = require('../config/constant');
var moment = require('moment')
var nano = require('nano')(config.apiURL.COUCHDB_URL_SERVER);
var db = nano.db.use('juxtorder');



exports.getCurrentOrder = async (req, res, next) => {
    try {

        var rid = req.params.rid ? req.params.rid : "";
        var cid = req.params.cid ? req.params.cid : "";
        var datefromuser = req.params.date ? req.params.date :"";
var converteddat=moment(datefromuser);
        db.view('order', 'orderByRestaurant', {

            key: null
        }, function (err, body) {
            let result=[];
            if (err) console.log(err);
            if (body && body.rows && body.rows.length > 0) {
                for(let i=0;i<body.rows.length;i++){
                    if(body.rows[i].value.createdDate ){
                        let orderdate =moment(body.rows[i].value.createdDate);
                        if (orderdate.isValid() && converteddat.diff(orderdate) >= 0) {
                            result.push(body.rows[i].value)
                        }else{
                            console.log('invalid');
                        }

                    }
                }
            }
            return res.json(result)
        });

    } catch (error) {
        return next(error)
    }
}

exports.UpdateOrderStatus = async (req, res, next) => {
    try {

        var id = req.params.id ? req.params.id : "";
        var postparams = req.body;
        var updateVal = {};
        db.view('order', 'OrderByID', {
            key: id
        }, function (err, body) {
            if (err) console.log(err);
            if (body && body.rows && body.rows.length > 0) {
                updateVal = body.rows[0].value;
            }


            updateVal[postparams.key] = postparams.value;
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