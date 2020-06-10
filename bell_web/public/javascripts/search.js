// 검색하기 버튼 클릭 이벤트
$(document).ready(function(){
    $(".searchButton").click(function() {
        window.scrollTo({
            top: 770,
            left: 0,
            behavior: 'smooth'
          });
    });          
});

// floating button 클릭 이벤트
$(document).ready(function(){
    $("#status").click(function() {
        var location = document.querySelector(".graph_view").offsetTop;
        window.scrollTo({
            top: location,
            left: 0,
            behavior: 'smooth'
          });
    });          
});

$(document).ready(function(){
    $("#seo_chi").click(function() {
        var location2 = document.querySelector(".china_seoul_view").offsetTop;
        window.scrollTo({
            top: location2,
            left: 0,
            behavior: 'smooth'
          });
    });          
});



 // MARK : 지도 설정
 function initialize() {

    //  default map
     map = new google.maps.Map(document.getElementById('map_container'), {
         center: {lat: -34.397, lng: 150.644},
         zoom: 15
     });
     infoWindow = new google.maps.InfoWindow;

    //  get my location
     if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
           var pos = {
             lat: position.coords.latitude,
             lng: position.coords.longitude
         };
         var marker = new google.maps.Marker({
             position : pos,
             animation : google.maps.Animation.BOUNCE
         });
         marker.setMap(map);

         infoWindow.open(map);
         map.setCenter(pos);
     }, function() {
         handleLocationError(true, infoWindow, map.getCenter());
         });
     } else {
    //      Browser doesn't support Geolocation
         handleLocationError(false, infoWindow, map.getCenter());
     }



     var  map2  =  new  google.maps.Map(document.getElementById('map2'),  {  
         center:  new  google.maps.LatLng(51.505,  -0.09),  
         mapTypeId:  google.maps.MapTypeId.ROADMAP,  
         zoom:  11  
     });  

     var  t  =  new  Date().getTime();  
     var  waqiMapOverlay  =  new  google.maps.ImageMapType({  
         getTileUrl:  function(coord,  zoom)  {  
             return  'https://tiles.aqicn.org/tiles/usepa-aqi/'  +  zoom  +  "/"  +  coord.x  +  "/"  +  coord.y  +  ".png?token=42449a98a32888268828e3059c4489aef7625391";  
         },  
         name:  "Air  Quality",  
     });  
     map2.overlayMapTypes.insertAt(0,waqiMapOverlay);  

 }



function initMap() {
    console.log('Map is initialized.');
    var map = new google.maps.Map(document.getElementById('map_container'), {
        zoom : 12,
        center: {
            lat: -34.397,
            lng: 150.644
        }
    });

    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function() {
        console.log('submit 버튼 클릭 이벤트 실행');

        geocodeAddress(geocoder, map);
    });

    function geocodeAddress(geocoder, resultMap) {
        console.log('geocodeAddress 함수 실행');

        var address = document.getElementById('city').value;

        geocoder.geocode({'city' : address}, function(result, status) {
            console.log(result);
            console.log(status);

            if (status === 'OK') {
                resultMap.setCenter(result[0].geometry.location);
                // resultMap.setZoom(18);
                
                var marker = new google.maps.Marker({
                    map: resultMap,
                    position: result[0].geometry.location
                });

                console.log('위도(latitude) : ' + marker.position.lat());
                console.log('경도(longitude) : ' + marker.position.lng());
            } else {
                alert('지오코드가 다음의 이유로 성공하지 못했습니다 : ' + status);
            }
        });
    }
}


    



google.maps.event.addDomListener(window, 'load', initialize);
