// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

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

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}



