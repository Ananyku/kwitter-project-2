var firebaseConfig = {
    apiKey: "AIzaSyC8sD1llnLl_tFDlGoZkQrrBF5_04Zf3vk",
    authDomain: "kwitter-project-bbb86.firebaseapp.com",
    projectId: "kwitter-project-bbb86",
    storageBucket: "kwitter-project-bbb86.appspot.com",
    messagingSenderId: "650539823416",
    appId: "1:650539823416:web:612804cae9a9afd66351cd"
  };
  
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   
   
   });});}
getData();
