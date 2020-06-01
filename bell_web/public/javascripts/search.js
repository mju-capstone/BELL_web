// 검색하기 버튼 클릭 이벤트
$(document).ready(function(){
    $(".searchBtn").click(function() {
        window.scrollTo({
            top: 1000,
            left: 0,
            behavior: 'smooth'
          });
    });
});

// set map properties
function initialize() {
    var mapProp = {
      center:new google.maps.LatLng(37.250943, 127.028344),
      zoom:10,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("map_container"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);
