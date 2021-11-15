var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', test: 'ciaoo' ,number: 2456, link: '/test' });   //il primo parametro è il nome della view in cui si vuole reinderizzare
});

router.get('/test', function(req, res, next) {
  res.render('test');   //il primo parametro è il nome della view in cui si vuole reinderizzare
});

module.exports = router;
