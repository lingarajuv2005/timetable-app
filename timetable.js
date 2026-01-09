import { auth, db } from "./firebase.js";
import { collection, addDoc, onSnapshot, query, where, deleteDoc, doc } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

Notification.requestPermission();

auth.onAuthStateChanged(user=>{
  if(!user) location.href="index.html";
  const q=query(collection(db,"timetable"),where("uid","==",user.uid));
  onSnapshot(q,snap=>{
    list.innerHTML="";
    snap.forEach(d=>{
      const data=d.data();
      list.innerHTML+=`<li>${data.date} ${data.time} - ${data.classname}
      <br>Attendance: ${data.attendance||"Pending"}
      <br>Notes: ${data.notes||""}
      <button onclick="mark('${d.id}')">Present</button>
      <button onclick="del('${d.id}')">Delete</button></li>`;
      scheduleNotify(data.date,data.time,data.classname);
    });
  });
});

window.addClass=async()=>{
  const user=auth.currentUser;
  await addDoc(collection(db,"timetable"),{
    uid:user.uid,
    date:date.value,
    time:time.value,
    classname:classname.value,
    mode:mode.value,
    link:link.value
  });
}

window.del=async(id)=>await deleteDoc(doc(db,"timetable",id));

window.toggleDark=()=>document.body.classList.toggle("dark");

function scheduleNotify(date,time,title){
  const t=new Date(date+" "+time)-new Date()-600000;
  if(t>0) setTimeout(()=>new Notification("Upcoming Class",{body:title}),t);
}