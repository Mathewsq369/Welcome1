let username;
let password;
const mySubmit = document.getElementById("mySubmit");
const myH1 = document.getElementById("myH1");

mySubmit.onclick = function(){
    username = document.getElementById("usernameInput").value;
    localStorage.setItem('username', username);
    password = document.getElementById("passwordInput").value;
    window.location.href = "home.html";
}