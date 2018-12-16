var latitude;
var longitude;
var origin;
var destination;

var config = {
    apiKey: "AIzaSyDkWIDbHJgspkk_IHcw0MqkYHGbe8Xy7HQ",
    authDomain: "group-project-1-318b8.firebaseapp.com",
    databaseURL: "https://group-project-1-318b8.firebaseio.com",
    projectId: "group-project-1-318b8",
    storageBucket: "group-project-1-318b8.appspot.com",
    messagingSenderId: "426857147168"
  };

  var database = firebase.database();

  firebase.initializeApp(config);
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, pass);
    auth.createUserWithEmailAndPassword(email, pass);
    auth.onAuthStateChanged(firebase => { });

        // function login() {
        //     function newLoginHappened(user) {
        //         if (user) {
        //             // user is signed in
        //             app(user);
        //         } else {
        //             var provider = new firebase.auth.GoogleAuthProvider();
        //             firebase.auth().signInWithRedirect(provider);
        //         }
        //     }

        //     firebase.auth().onAuthStateChanged(newLoginHappened)
        // }

function getUserLocation(){
    navigator.geolocation.getCurrentPosition(function(position){
        // console.log(position);

        // console.log(position.coords.latitude);
        // console.log(position.coords.longitude);
        var latlong = position.coords.latitude + "," + position.coords.longitude;
        console.log(latlong);
        
        $("#mapsImage").attr("src", "https://www.google.com/maps/embed/v1/place?key=AIzaSyBLjJhcaHNLroE3ch8eeLZJEmtA1fziUFg&q="+latlong+"&center="+latlong)

    })
}

function getWeather() {
    var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?zip=44092,us&appid=f9d254aedad74e95688746dad9882b99";

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });

}

function getRoute() {

    $("#mapsImage").attr("src", "https://www.google.com/maps/embed/v1/directions?key=AIzaSyBLjJhcaHNLroE3ch8eeLZJEmtA1fziUFg&origin="+origin+"&destination="+destination)
}
origin = "cleveland+ohio";
destination = "akron+ohio";

// getRoute();
var myOptions = {
    zoom: 10,
    center: new google.maps.LatLng(40.84, 14.25),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);

   var directionsService = new google.maps.DirectionsService();
   var directionsRequest = {
     origin: origin,
     destination: destination,
     provideRouteAlternatives: true,
     travelMode: google.maps.DirectionsTravelMode.DRIVING,
     unitSystem: google.maps.UnitSystem.METRIC
   };

directionsService.route(
    directionsRequest,
    function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            for (var i = 0, len = response.routes.length; i < len; i++) {
                new google.maps.DirectionsRenderer({
                    map: mapObject,
                    directions: response,
                    routeIndex: i
                });
            }
        } else {
            $("#error").append("Unable to retrieve your route<br />");
        }
    }
 );