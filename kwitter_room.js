
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

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = " kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; Room_names = childKey;

      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id'>"
    });
  });
} getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";

}