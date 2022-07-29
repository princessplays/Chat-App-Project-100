// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyASGBE7nS0AUdaS7H2ba2QQidHjsLQrDgk",
    authDomain: "let-s-chat-webapp-new.firebaseapp.com",
    projectId: "let-s-chat-webapp-new",
    storageBucket: "let-s-chat-webapp-new.appspot.com",
    messagingSenderId: "123039691877",
    appId: "1:123039691877:web:fcb3a9116b86dd6704428c"
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



