import { initializeApp } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getAnalytics } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

import { getFirestore } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCjJWYGKvqSITZaunoGqSCL-1DHhXD4TX0",
  authDomain: "my-time-table-2fd74.firebaseapp.com",
  projectId: "my-time-table-2fd74",
  storageBucket: "my-time-table-2fd74.firebasestorage.app",
  messagingSenderId: "1093466719154",
  appId: "1:1093466719154:web:f0297e6aa292df6c4adaab",
  measurementId: "G-Z1WWELFN4T"
};

// ✅ INIT
export const app = initializeApp(firebaseConfig);

// ✅ EXPORT FIRESTORE
export const db = getFirestore(app);

getAnalytics(app);
