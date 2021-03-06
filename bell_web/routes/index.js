var express = require('express');
var router = express.Router();
var request = require('request');

const catchErrors = require('../lib/async-error');

// MARK : Connect to MySQL
const mysql =  require('mysql')

const connection  = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'china_seoul'
})

var Chart = require('chart.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// get finedust db
// router.get('/list', catchErrors(async (req,res,next)=> {

//   var month, china_average, seoul_average
//   var queryString = "SELECT * FROM finedust2018"

//   connection.query(queryString, (err,rows,fields)=>{
//     if(err){
//       throw err
//     } 
//     console.log(rows)
//     res.render('user/list', {userlist: rows, title: 'FineDust2018'})
//   })
// }))

// call api for finedust
const key = 'g5wuVXrLzJMBI9kR2gmdXm6ltsn0zYEicoOG7g2xNHZnGZVp9v7znsIO45M2l7R6rlE5wiD%2FjtIZupMYvyN2Pg%3D%3D'

const addr = 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName='
const addr2 = '&dataTerm=month&pageNo=1&numOfRows=10&ServiceKey=' 
const addr3 = '&ver=1.3&_returnType=json'

const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=853c909f0f8639d63344ec1b9f73c12a'

router.get('/aqi', catchErrors(async (req, res, next) => {
  var data, pm10, cai, o3, no2, so2, co, pm10Grade1h, pm10Grade, caiGrade, so2Grade, coGrade, o3Grade, no2Grade, pm25, pm25Grade1h, mytemp
  var myaddr = addr + encodeURI('강남구') + addr2 + key + addr3

  // MARK : 1. call weather API 
  request(weatherAPI, function(error, response, body){
    if(error){
      console.log(error)
    }
    var weatherOBJ = JSON.parse(body)
    var temp = weatherOBJ.main.temp
    var newtemp = temp-273.15 // kelvin to celsius 
    mytemp = Math.floor(newtemp)
    console.log(mytemp)
  })

  // MARK : 2. call fine dust API 
  request(myaddr, function(error, response, body){
    if(error){
      console.log(error)
    }
    var obj = JSON.parse(body)
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
    pm25 = obj.list[0].pm25Value
    pm25Grade1h = obj.list[0].pm25Grade1h
  });

  setTimeout(function(){ 
    res.render('aqi/aqi_page', {data: data, cai:cai, pm10:pm10, o3:o3, so2:so2, co:co, no2:no2, caiGrade:caiGrade, pm10Grade1h:pm10Grade1h,
      so2Grade:so2Grade, coGrade:coGrade, o3Grade:o3Grade, no2Grade:no2Grade, pm25:pm25, pm25Grade1h:pm25Grade1h, mytemp:mytemp})
  }, 1500);
  
}))

router.post('/search', catchErrors(async (req, res, next)=> {
  let mycity = req.body.mycity
  let findaddr = addr + encodeURI(mycity) + addr2+ key + addr3

  var data, pm10, cai, o3, no2, so2, co, pm10Grade1h, pm10Grade, caiGrade, so2Grade, coGrade, o3Grade, no2Grade, pm25, pm25Grade1h, mytemp

  // MARK : 1. call weather API 
  request(weatherAPI, function(error, response, body){
    if(error){
      console.log(error)
    }
    var weatherOBJ = JSON.parse(body)
    var temp = weatherOBJ.main.temp
    var newtemp = temp-273.15 // kelvin to celsius 
    mytemp = Math.floor(newtemp)
    console.log(mytemp)
  })

  // MARK : 2. call fine dust API 
  request(findaddr, function(error, response, body){
    if(error){
      console.log(error)
    }
    var obj = JSON.parse(body)
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
    pm25 = obj.list[0].pm25Value
    pm25Grade1h = obj.list[0].pm25Grade1h
  });

  setTimeout(function(){ 
    res.render('aqi/aqi_page', {data: data, cai:cai, pm10:pm10, o3:o3, so2:so2, co:co, no2:no2, caiGrade:caiGrade, pm10Grade1h:pm10Grade1h,
      so2Grade:so2Grade, coGrade:coGrade, o3Grade:o3Grade, no2Grade:no2Grade, pm25:pm25, pm25Grade1h:pm25Grade1h, mycity:mycity, mytemp:mytemp})
  }, 1500);


}));

module.exports = router;
