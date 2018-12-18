var express = require('express');
var router = express.Router();
const controller = require('../controllers/menu.controller');


module.exports = router;


router.route('/addmenu')
  .post(controller.addMenu)


  router.route('/getAllMenu')
  .post(controller.getAllMenu)
  
