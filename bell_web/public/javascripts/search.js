// 검색하기 버튼 클릭 이벤트
$(document).ready(function(){
    $(".searchButton").click(function() {
        // window.scrollTo({
        //     top: 770,
        //     left: 0,
        //     behavior: 'smooth'
        //   });
    });          
});

// floating button 클릭 이벤트
$(document).ready(function(){
    $("#btnList1").click(function() {
        var location = document.querySelector(".info_view").offsetTop;
        window.scrollTo({
            top: location,
            left: 0,
            behavior: 'smooth'
          });
    });          
});

$(document).ready(function(){
    $("#btnList2").click(function() {
        var location2 = document.querySelector(".china_seoul_view").offsetTop;
        window.scrollTo({
            top: location2,
            left: 0,
            behavior: 'smooth'
          });
    });          
});



// MARK : 지도 설정
// function initialize() {
//     // default map
//     map = new google.maps.Map(document.getElementById('map_container'), {
//         center: {lat: -34.397, lng: 150.644},
//         zoom: 15
//     });

//     infoWindow = new google.maps.InfoWindow;

//     // get my location
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function(position) {
//           var pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//         };
//         var marker = new google.maps.Marker({
//             position : pos,
//             animation : google.maps.Animation.BOUNCE
//         });
//         marker.setMap(map);

//         infoWindow.open(map);
//         map.setCenter(pos);
//     }, function() {
//         handleLocationError(true, infoWindow, map.getCenter());
//         });
//     } else {
//         // Browser doesn't support Geolocation
//         handleLocationError(false, infoWindow, map.getCenter());
//     }
    

//     // var mapProp = {
//     //    center: new google.maps.LatLng(37.580468, 126.923456),
//     //    zoom:15,
//     //    mapTypeId:google.maps.MapTypeId.ROADMAP
//     //  };
//     //  var map=new google.maps.Map(document.getElementById("map_container"),mapProp); 
    
//     //  var marker = new google.maps.Marker({
//     //      position:{lat: 37.580468, lng: 126.923456},
//     //      animation:google.maps.Animation.BOUNCE
//     //  });
//     //  marker.setMap(map);




//     var  map2  =  new  google.maps.Map(document.getElementById('map2'),  {  
//         center:  new  google.maps.LatLng(51.505,  -0.09),  
//         mapTypeId:  google.maps.MapTypeId.ROADMAP,  
//         zoom:  11  
//     });  

//     var  t  =  new  Date().getTime();  
//     var  waqiMapOverlay  =  new  google.maps.ImageMapType({  
//         getTileUrl:  function(coord,  zoom)  {  
//             return  'https://tiles.aqicn.org/tiles/usepa-aqi/'  +  zoom  +  "/"  +  coord.x  +  "/"  +  coord.y  +  ".png?token=42449a98a32888268828e3059c4489aef7625391";  
//         },  
//         name:  "Air  Quality",  
//     });  
//     map2.overlayMapTypes.insertAt(0,waqiMapOverlay);  

// }




// function initialize() {
//     var  map2  =  new  google.maps.Map(document.getElementById('map2'),  {  
//         center:  new  google.maps.LatLng(37.557941, 126.987481),  
//         mapTypeId:  google.maps.MapTypeId.ROADMAP,  
//         zoom:  12  
//     });  

//     var  t  =  new  Date().getTime();  
//     var  waqiMapOverlay  =  new  google.maps.ImageMapType({  
//         getTileUrl:  function(coord,  zoom)  {  
//             return  'https://tiles.aqicn.org/tiles/usepa-aqi/'  +  zoom  +  "/"  +  coord.x  +  "/"  +  coord.y  +  ".png?token=42449a98a32888268828e3059c4489aef7625391";  
//         },  
//         name:  "Air  Quality",  
//     });  
//     map2.overlayMapTypes.insertAt(0,waqiMapOverlay);  

// }




function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {lat: 37.498156, lng: 127.027615}
    });
    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });
}

function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
            map: resultsMap,
            position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

google.maps.event.addDomListener(window, 'load', initMap);


// google.maps.event.addDomListener(window, 'load', initialize);