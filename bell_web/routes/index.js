var express = require('express');
var router = express.Router();
var request = require('request');

const catchErrors = require('../lib/async-error');

var Chart = require('chart.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// call api for finedust
router.get('/aqi', catchErrors(async (req, res, next) => {
  const key = 'g5wuVXrLzJMBI9kR2gmdXm6ltsn0zYEicoOG7g2xNHZnGZVp9v7znsIO45M2l7R6rlE5wiD%2FjtIZupMYvyN2Pg%3D%3D'

  const addr = 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName='
  const addr2 = '&dataTerm=month&pageNo=1&numOfRows=10&ServiceKey=' 
  const addr3 = '&ver=1.3&_returnType=json'

  var myaddr = addr + encodeURI('서대문구') + addr2 + key + addr3
  // var myaddr = addr + encodeURI(res.body.class) + addr2 + key + addr3

  var data, pm10, cai, o3, no2, so2, co, pm10Grade1h, pm10Grade, caiGrade, so2Grade, coGrade, o3Grade, no2Grade, pm25, pm25Grade1h

  request(myaddr, function(error, response, body){
    if(error){
      console.log(error)
    }
    var obj = JSON.parse(body)
    console.log(obj.list[0])

    data = obj.list[0].dataTime
    pm10 = obj.list[0].pm10Value
    cai = obj.list[0].khaiValue
    o3 = obj.list[0].o3Value
    no2 = obj.list[0].no2Value
    so2 = obj.list[0].so2Value
    co = obj.list[0].coValue
    pm10Grade1h = obj.list[0].pm10Grade1h
    pm10Grade = obj.list[0].pm10Grade
    caiGrade = obj.list[0].khaiGrade
    so2Grade = obj.list[0].so2Grade
    coGrade = obj.list[0].coGrade
    o3Grade = obj.list[0].o3Grade
    no2Grade = obj.list[0].no2Grade

    res.render('aqi/aqi_page', {data: data, cai:cai, pm10:pm10, o3:o3, so2:so2, co:co, no2:no2, caiGrade:caiGrade, pm10Grade1h:pm10Grade1h, so2Grade:so2Grade, coGrade:coGrade, o3Grade:o3Grade, no2Grade:no2Grade})
  });
}))

module.exports = router;
