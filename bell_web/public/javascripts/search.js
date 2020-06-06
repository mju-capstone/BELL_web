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

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }

// 지도 설정
function initialize() {

    // default map
    map = new google.maps.Map(document.getElementById('map_container'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 15
    });
    infoWindow = new google.maps.InfoWindow;

    // get my location
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
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

    // var mapProp = {
    //   center: new google.maps.LatLng(37.580468, 126.923456),
    //   zoom:15,
    //   mapTypeId:google.maps.MapTypeId.ROADMAP
    // };
    // var map=new google.maps.Map(document.getElementById("map_container"),mapProp); 
    
    // var marker = new google.maps.Marker({
    //     position:{lat: 37.580468, lng: 126.923456},
    //     animation:google.maps.Animation.BOUNCE
    // });
    // marker.setMap(map);

}

google.maps.event.addDomListener(window, 'load', initialize);
