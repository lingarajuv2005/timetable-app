import { getAuth, signInWithEmailAndPassword, signOut } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { app } 
from "./firebase.js";   // make sure path is correct

const auth = getAuth(app);

// LOGIN
window.login = function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // map username to email
  let email = "";

  if (username === "Lingaraju") {
    email = "lingaraju@gmail.com";
  } else if (username === "Vishal") {
    email = "vishal@gmail.com";
  } else {
    alert("Invalid username");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      localStorage.setItem("currentUser", username);
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};

// LOGOUT
window.logout = function () {
  signOut(auth).then(() => {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
  });
};
