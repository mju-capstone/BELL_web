var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* get aqi page */
router.get('/aqi', function(req,res,next){
  res.render('aqi/aqi_page')
})



module.exports = router;
