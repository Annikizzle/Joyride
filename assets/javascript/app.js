var latitude;
var longitude;
// function initMap() {
//     var userLocation = { lat: latitude, lng: longitude};

//     var map = new google.maps.Map(document.getElementById('map'), { zoom: 4, center: userLocation });

//     var marker = new google.map.Marker({ position: userLocation, map: map });

// }

// navigator.geolocation.getCurrentPosition(function(position){
//     // console.log(position);

//     // console.log(position.coords.latitude);
//     // console.log(position.coords.longitude);
//     var latlong = position.coords.latitude + "," + position.coords.longitude;
//     console.log(latlong);
    
//     $("#mapsImage").attr("src", "https://www.google.com/maps/embed/v1/place?key=AIzaSyBLjJhcaHNLroE3ch8eeLZJEmtA1fziUFg&q="+latlong+"&center="+latlong)

// })

var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?zip=44092,us&appid=f9d254aedad74e95688746dad9882b99";

$.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });