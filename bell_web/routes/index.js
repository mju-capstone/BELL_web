var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* get aqi page */

router.get('/search', function(req,res,next){
  res.render('aqi_includes/searchRegion')
})

router.get('/info', function(req, res, next){
  res.render('aqi_includes/aqiInfo')
})


module.exports = router;
