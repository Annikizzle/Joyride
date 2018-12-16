// maps 
function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });
    directionsDisplay.setMap(map);

    var onChangeHandler = function() {
      calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    document.getElementById('start').addEventListener('change', onChangeHandler);
    document.getElementById('end').addEventListener('change', onChangeHandler);
  }

  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
      origin: document.getElementById('start').value,
      destination: document.getElementById('end').value,
      travelMode: 'DRIVING'
    }, function(response, status) {
        console.log(response);
        console.log(response.routes[0].overview_path[15].toString());
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
  function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) { // Get the distance between 2 latlng points
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
    
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }
  var latlng = {
    lat: 41.692611,
    lng: -81.192178
  }
    // var geocoder = new google.maps.Geocoder;
    // console.log("distance: "+ getDistanceFromLatLonInKm(41.692611,-81.192178,41.503156,-81.603450));
    // geocoder.geocode({'location': latlng}, function(results, status) {
    // console.log(results);
    // console.log(status);
    // if (status === 'OK') {
    //     if (results[0]) {
    //       //map.setZoom(11);
    //     //   var marker = new google.maps.Marker({
    //     //     position: latlng,
    //     //     map: map
    //     //  });
    //     //  infowindow.setContent(results[0].formatted_address);
    //     //  infowindow.open(map, marker);
    //     } else {
    //       window.alert('No results found');
    //     }
    //   } else {
    //     window.alert('Geocoder failed due to: ' + status);
    //   }
    // });


  // firebase

// Initialize Firebase
//  var config = {
//     apiKey: "AIzaSyAOiJtpQDwHqgC0vawZ4zCgEN_0T9J8DLU",
//     authDomain: "joyride-app-1.firebaseapp.com",
//     databaseURL: "https://joyride-app-1.firebaseio.com",
//     projectId: "joyride-app-1",
//     storageBucket: "joyride-app-1.appspot.com",
//     messagingSenderId: "728902455010"
//   };
//   firebase.initializeApp(config);
// //  uncomment this and move it once button click events are set up
//   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//    });
//    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//    });
   
//    firebase.auth().signOut().then(function() {
//     // Sign-out successful.
//    }).catch(function(error) {
//     // An error happened.
//    });

// firebase login function

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