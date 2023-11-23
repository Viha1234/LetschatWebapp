const firebaseConfig = {
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

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}
