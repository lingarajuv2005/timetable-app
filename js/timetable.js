import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const user = localStorage.getItem("currentUser");
if (!user) window.location.href = "index.html";

async function addAttendance(subject, classDate) {
  const today = new Date().toISOString().split("T")[0];

  if (classDate !== today) {
    alert("Attendance allowed only on class day");
    return;
  }

  await addDoc(collection(db, "users", user, "attendance"), {
    subject,
    date: classDate,
    status: "Present"
  });

  alert("Attendance marked");
}

async function loadAttendance() {
  const snapshot = await getDocs(collection(db, "users", user, "attendance"));
  const list = document.getElementById("attendanceList");
  list.innerHTML = "";

  snapshot.forEach(doc => {
    const d = doc.data();
    list.innerHTML += `<li>${d.subject} - ${d.date} - ${d.status}</li>`;
  });
}

window.addAttendance = addAttendance;
window.onload = loadAttendance;
