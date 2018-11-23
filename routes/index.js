var express = require('express');
var router = express.Router();
var userroutes = require('./users')
/* GET home page. */
router.get('/tt', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/user', userroutes);

module.exports = router;
