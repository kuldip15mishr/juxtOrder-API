var express = require('express');
var router = express.Router();
const controller = require('../controllers/restaurant.controller');


module.exports = router;


router.route('/addrestaurant')
  .post(controller.addRestaurant)


// router.route('/getRestaurant/:id')
//   .get(controller.getUserByID)  
