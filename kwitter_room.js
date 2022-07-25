
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC_kWchxv9FAGuVnRM5ujQGq37B9zeJjEg",
      authDomain: "kwitter-e54df.firebaseapp.com",
      databaseURL: "https://kwitter-e54df-default-rtdb.firebaseio.com",
      projectId: "kwitter-e54df",
      storageBucket: "kwitter-e54df.appspot.com",
      messagingSenderId: "883918894504",
      appId: "1:883918894504:web:fb2b123af0adff66e6d99d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
          });
          localStorage.setItem("room_name" , room_name);
          window.location = "kwitter_page.html";
          
    }

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logOut(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");

      window.location = "index.html";
}