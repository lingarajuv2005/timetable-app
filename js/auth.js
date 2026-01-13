function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (
    (u === "Lingaraju" && p === "Lingaraju@123") ||
    (u === "Vishal" && p === "Vishal@123")
  ) {
    localStorage.setItem("currentUser", u);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Invalid Login";
  }
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

window.login = login;
window.logout = logout;
