import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔐 Check login
const user = localStorage.getItem("currentUser");
if (!user) {
  window.location.href = "index.html";
}

// ➕ Add note ONLY after class end time
window.addNote = async function (subject, classEndTime, note) {
  const now = new Date();
  const end = new Date(classEndTime);

  if (now < end) {
    alert("Notes allowed only after class ends");
    return;
  }

  try {
    await addDoc(collection(db, "users", user, "notes"), {
      subject,
      note,
      createdAt: new Date().toISOString()
    });

    alert("✅ Note saved");
    loadNotes();
  } catch (err) {
    alert("Error saving note");
    console.error(err);
  }
};

// 📄 Load notes
async function loadNotes() {
  const list = document.getElementById("notesList");
  if (!list) return;

  list.innerHTML = "";

  try {
    const snapshot = await getDocs(
      collection(db, "users", user, "notes")
    );

    snapshot.forEach(doc => {
      const d = doc.data();
      const li = document.createElement("li");
      li.textContent = `${d.subject}: ${d.note}`;
      list.appendChild(li);
    });
  } catch (err) {
    console.error(err);
  }
}

// ✅ Safe load
document.addEventListener("DOMContentLoaded", loadNotes);
