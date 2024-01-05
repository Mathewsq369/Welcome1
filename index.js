let username;
let password;
const mySubmit = document.getElementById("mySubmit");
const myH1 = document.getElementById("myH1");
const homeH1 = document.getElementById("homeH1");

mySubmit.onclick = function(){
    username = document.getElementById("usernameInput").value;
    password = document.getElementById("passwordInput").value;
    window.location.href = "home.html";
    homeH1.textContent = `Welcome ${username}`;
}