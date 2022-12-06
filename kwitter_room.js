
// Your web app's Firebase configuration
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
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!"

function add_room() {
      room_name = document.getElementById("room_name").value
      localStorage.setItem("room_name",room_name)
      firebase.database().ref("/").child(room_name).update(
            {
                  purpose:"add room name"
            }
      );
      window.location="kwitter_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room_name"=+Room_names)
                  row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";
                  document.getElementById("output").innerHTML+=row
                  //End code
            });
      });
}
getData();


function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}
