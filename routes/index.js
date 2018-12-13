var express = require('express');
var router = express.Router();
var userroutes = require('./users')
var menuroutes = require('./menu');
var restaurant = require('./restaurant');
var kitchen = require('./kitchen');
/* GET home page. */
router.get('/tt', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/user', userroutes);
router.use('/menu',menuroutes);
router.use('/restaurant',restaurant);
router.use('/kitchen',kitchen);
module.exports = router;
