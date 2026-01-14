function register(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if(!email || !password){ alert("Enter email and password"); return; }
  
  let users = JSON.parse(localStorage.getItem("users")) || [];
  if(users.find(u=>u.email===email)){ alert("User already exists"); return; }

  users.push({email,password,credits:0});
  localStorage.setItem("users",JSON.stringify(users));
  localStorage.setItem("currentUser",email);
  window.location.href="dashboard.html";
}

function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(u=>u.email===email && u.password===password);
  if(!user){ alert("Invalid credentials"); return; }
  localStorage.setItem("currentUser",email);
  window.location.href="dashboard.html";
}
