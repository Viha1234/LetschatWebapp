
//ADD YOUR FIREBASE LINKS

    firebaseConfig = {
    apiKey: "AIzaSyDszQfefikzMjASODFPgEwHbxIk_kID69s",
    authDomain: "kwitter-b72ff.firebaseapp.com",
    databaseURL: "https://kwitter-b72ff-default-rtdb.firebaseio.com",
    projectId: "kwitter-b72ff",
    storageBucket: "kwitter-b72ff.appspot.com",
    messagingSenderId: "820050159569",
    appId: "1:820050159569:web:f20ccf050cb5d3e587a2f0",
    measurementId: "G-SLVDJJHGCL"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose :" adding user"
    });
  }