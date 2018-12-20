$(document).ready(function(){

    var config = {
        apiKey: "AIzaSyDkWIDbHJgspkk_IHcw0MqkYHGbe8Xy7HQ",
        authDomain: "group-project-1-318b8.firebaseapp.com",
        databaseURL: "https://group-project-1-318b8.firebaseio.com",
        projectId: "group-project-1-318b8",
        storageBucket: "group-project-1-318b8.appspot.com",
        messagingSenderId: "426857147168"
      };

    firebase.initializeApp(config);

    var database = firebase.database();


$(".register form").on("submit", function(event){
    event.preventDefault();

    var email = $(".register .email").val();
    var password = $(".register .password").val();

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(user){
            console.log(user);
        })
        .catch(function(error){
            console.log(error);
        });



    });

$(".register form").on("submit", function(event){
    event.preventDefault();

    var email = $(".register .email").val();
    var password = $(".register .password").val();

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user){
            console.log(user);
        })
        .catch(function(error){
            console.log(error);
        });

    });

    firebase.auth().onAuthStateChanged(function(user){

        $(".route form").off();

        if(user){
            console.log("User is signed in.");

            $(".route form").on("submit", function(event){
                event.preventDefault();

                var route = $(".route .text").val();

                firebase.database().ref("/users/" + user.uid).child("/routes/").push(route);
            })
        } else {
            console.log("No user logged in..")
        }
    });

});
