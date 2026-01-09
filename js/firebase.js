import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAwS8XqugAkdnLDcSou5r1j-XYf7Jg4S9U",
  authDomain: "timetable-app-2fa2d.firebaseapp.com",
  projectId: "timetable-app-2fa2d",
  storageBucket: "timetable-app-2fa2d.appspot.com",
  messagingSenderId: "743292593584",
  appId: "1:743292593584:web:35fd2f2c7b21383ee16275"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
