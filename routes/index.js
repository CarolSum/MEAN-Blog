var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log('hehe');
  res.render('index');
});

module.exports = router;