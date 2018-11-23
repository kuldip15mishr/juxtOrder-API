
var express = require('express');
var router = express.Router();
const controller = require('../controllers/kitchen.controller');


module.exports = router;


router.route('/getCurrentOrders/:resID')
  .get(controller.getCurrentOrder)

  
