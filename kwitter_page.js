//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAi58a5znMVS9f_CSAThVW8cB4IWKozGXo",
      authDomain: "class-93-quitter.firebaseapp.com",
      databaseURL: "https://class-93-quitter-default-rtdb.firebaseio.com",
      projectId: "class-93-quitter",
      storageBucket: "class-93-quitter.appspot.com",
      messagingSenderId: "147719887222",
      appId: "1:147719887222:web:f3bab2555ad944e6058257"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name")
var room_name = localStorage.getItem("room_name")

function send(){
      msg= document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").value=""
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

//Start code
console.log(firebase_message_id)
console.log(message_data)
name=message_data['name']
message= message_data['message']
like= message_data['like']

var name_with_tag= "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>"
var message_with_tag="<h4 class='message_h4'>"+message+"</h4>"
var like_button= "<button class='btn btn-warning' id="+firebase_message_id+"value="+like+" onclick='update_like(this.id)'>"
var span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>"
row= name_with_tag+message_with_tag+like_button+span_with_tag
document.getElementById("output").innerHTML+=row

//End code
      } });  }); }
getData();
