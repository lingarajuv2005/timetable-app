import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.login = function(){
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(()=>location.href="dashboard.html")
    .catch(e=>alert(e.message));
}
