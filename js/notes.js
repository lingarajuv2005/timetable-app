import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const user = localStorage.getItem("currentUser");
if (!user) window.location.href = "index.html";

async function addNote(subject, classEndTime, note) {
  const now = new Date();
  const end = new Date(classEndTime);

  if (now < end) {
    alert("Notes allowed only after class ends");
    return;
  }

  await addDoc(collection(db, "users", user, "notes"), {
    subject,
    note,
    date: new Date().toISOString()
  });

  alert("Note saved");
}

async function loadNotes() {
  const snapshot = await getDocs(collection(db, "users", user, "notes"));
  const list = document.getElementById("notesList");
  list.innerHTML = "";

  snapshot.forEach(doc => {
    const d = doc.data();
    list.innerHTML += `<li>${d.subject}: ${d.note}</li>`;
  });
}

window.addNote = addNote;
window.onload = loadNotes;
