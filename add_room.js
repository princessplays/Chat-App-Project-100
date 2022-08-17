var firebaseConfig = {
      apiKey: "AIzaSyAw4_GoE-ULNdJ7XQ_EVG9CAzxmsvNx3mQ",
      authDomain: "chat-app-new-51ee0.firebaseapp.com",
      databaseURL: "https://chat-app-new-51ee0-default-rtdb.firebaseio.com",
      projectId: "chat-app-new-51ee0",
      storageBucket: "chat-app-new-51ee0.appspot.com",
      messagingSenderId: "66777788244",
      appId: "1:66777788244:web:2c2c5ff9f1d49167e422c1",
      measurementId: "G-0NQPXYP9H4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);



function addRoom()
{
      Room_names = document.getElementById("Room_names").value;

      firebase.database().ref("/").child(Room_names).update({
        purpose: "adding room name"      
      
      });

      localStorage.setItem("Room_names", Room_names );
      window.location = "chat_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
    console.log("Room Name -" + Room_names);
    row = "<div class='Rooms_names' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
   });});}
getData();


function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


function redirectToRoomName(name)
      
     {
            console.log(name);
            localStorage.setItem("Room_names", name);
            window.location = "chat_page.html";
      }
      