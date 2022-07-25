//YOUR FIREBASE LINKS

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
    room_name = localStorage.getItem("room_name");

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];

      name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'></h4>";
      message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";


      like_button = "<button class = 'btn btn-warning' id = " + firebase_message_id + "value = " + like + "onclick = 'updateLike(this.id)' >";
      span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like: " + like + "</span></button><hr>";

      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log("click on likebutton - " + message_id );
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;
      console.log(update_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : update_likes
      });
}

function logOut(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");

      window.location = "index.html";
}