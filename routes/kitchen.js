
var express = require('express');
var router = express.Router();
const controller = require('../controllers/kitchen.controller');


module.exports = router;


router.route('/getCurrentOrders')
  .get(controller.getCurrentOrder)

router.route('/getCurrentOrders/:rid')
  .get(controller.getCurrentOrder)

router.route('/getCurrentOrders/:rid/:cid')
  .get(controller.getCurrentOrder)

  router.route('/updateOrders/:id')
  .post(controller.UpdateOrderStatus)
  