// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAyR7nyx0YuNMkhd3Pslx9PFjxHhLUskBU",
    authDomain: "kwitter-16822.firebaseapp.com",
    databaseURL: "https://kwitter-16822-default-rtdb.firebaseio.com",
    projectId: "kwitter-16822",
    storageBucket: "kwitter-16822.appspot.com",
    messagingSenderId: "169775505635",
    appId: "1:169775505635:web:a8f9a6de4e578acc3465d6"
  };
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
}



