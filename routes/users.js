var express = require('express');
var router = express.Router();
const controller = require('../controllers/user.controller');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;


  router.route('/add')
  .post(controller.addUser)

  router.route('/getUserByID/:id')
  .get(controller.getUserByID)
  router.route('/getAllUser')
  .get(controller.getAllUser)
  

  router.route('/authentication')
  .post(controller.authentication)
  

  router.route('/deleteuser/:id')
  .post(controller.deleteUser)
  