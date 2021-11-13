
firebaseConfig = {
    apiKey: "AIzaSyAd9YrlWJuO_TP2DX8IGGYz3LfWARMlVio",
    authDomain: "kwitter-457e3.firebaseapp.com",
    databaseURL: "https://kwitter-457e3-default-rtdb.firebaseio.com",
    projectId: "kwitter-457e3",
    storageBucket: "kwitter-457e3.appspot.com",
    messagingSenderId: "549105934979",
    appId: "1:549105934979:web:5f472c26a83d486fdcf1b6",
    measurementId: "G-5NWMRYLWK6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function AddUser(){
      var username= document.getElementById("User_name").value;
      firebase.database().ref("/").child(username).update({
          result:"name"
      });
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();