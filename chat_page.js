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

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();


  function send()
  {
    firebase.datebase().ref(room_name).push(
      {
        name: user_name,
        message:msg,
        like:0
      })

      document.getElementById("msg").value = "";
  }