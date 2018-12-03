var express = require('express');
var router = express.Router();
const controller = require('../controllers/restaurant.controller');


module.exports = router;


router.route('/addrestaurant')
  .post(controller.addRestaurant)


router.route('/getRestaurant')
  .get(controller.getRestaurantbyuser)  

  router.route('/getChainRestaurant/:id')
  .get(controller.getChainRestaurantByRestaurantID)  

  
  router.route('/getAllChainRestaurant')
  .get(controller.getAllChainRestaurant)  


  router.route('/getChainRestaurantByChainID/:id')
  .get(controller.getChainRestaurantByChainID) 