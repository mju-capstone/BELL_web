var express = require('express');
var router = express.Router();
var request = require('request');

var Chart = require('chart.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* get aqi page */
router.get('/aqi', function(req, res, next){
  res.render('aqi/aqi_page')
})


// finedust api connection
function realTimeMise() {
  $.ajax({
    url:Forec
  })
}

module.exports = router;
