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

// ✅ Mark attendance ONLY on class date
window.addAttendance = async function (subject, classDate) {
  const today = new Date().toISOString().split("T")[0];

  if (classDate !== today) {
    alert("Attendance allowed only on class day");
    return;
  }

  try {
    await addDoc(collection(db, "users", user, "attendance"), {
      subject,
      date: classDate,
      status: "Present",
      createdAt: new Date().toISOString()
    });

    alert("✅ Attendance marked");
    loadAttendance();
  } catch (err) {
    alert("Error marking attendance");
    console.error(err);
  }
};

// 📄 Load attendance
async function loadAttendance() {
  const list = document.getElementById("attendanceList");
  if (!list) return;

  list.innerHTML = "";

  try {
    const snapshot = await getDocs(
      collection(db, "users", user, "attendance")
    );

    snapshot.forEach(doc => {
      const d = doc.data();
      const li = document.createElement("li");
      li.textContent = `${d.subject} - ${d.date} - ${d.status}`;
      list.appendChild(li);
    });
  } catch (err) {
    console.error(err);
  }
}

// ✅ Safe load
document.addEventListener("DOMContentLoaded", loadAttendance);
