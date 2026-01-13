function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (
    (username === "Lingaraju" && password === "Lingaraju@123") ||
    (username === "Vishal" && password === "Vishal@123")
  ) {
    localStorage.setItem("currentUser", username);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Login");
  }
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}
