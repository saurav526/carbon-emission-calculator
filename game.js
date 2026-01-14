let email = localStorage.getItem("currentUser");
let users = JSON.parse(localStorage.getItem("users"));

if (!email) {
  window.location.href = "index.html";
}

let user = users.find(u => u.email === email);

document.getElementById("userEmail").innerText = email;
document.getElementById("points").innerText = user.points;

function earnPoints() {
  user.points += 10;
  localStorage.setItem("users", JSON.stringify(users));
  document.getElementById("points").innerText = user.points;
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}
