var express = require('express');
var router = express.Router();
var request = require('request');

var request = require('request');

var Chart = require('chart.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// call api for finedust
const key = 'g5wuVXrLzJMBI9kR2gmdXm6ltsn0zYEicoOG7g2xNHZnGZVp9v7znsIO45M2l7R6rlE5wiD%2FjtIZupMYvyN2Pg%3D%3D'

const addr = 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName='
const addr2 = '&dataTerm=month&pageNo=1&numOfRows=10&ServiceKey=' 
const addr3 = '&ver=1.3&_returnType=json'

var myaddr = addr + encodeURI('서대문구') + addr2 + key + addr3

/* get aqi page */
router.get('/aqi', function(req,res,next){
  request(myaddr, function(error, response, body){
    if(error){
      console.log(error)
    }
    var obj = JSON.parse(body)
    console.log(obj) // 콘솔창에 찍어보기

    data = obj.list[0].dataTime
    pm10 = obj.list[0].pm10Value
    res.render('aqi/aqi_page')
    res.render('aqi_includes/aqi_info', {title: 'misae', data:data, pm10:pm10})
  });
})


module.exports = router;