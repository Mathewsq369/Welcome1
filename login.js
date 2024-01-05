let username;
let email;
let password;
const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = function(){
    event.preventDefault();
    username = document.getElementById("loginUsernameInput").value;
    email = document.getElementById("loginEmailInput").value;
    password = document.getElementById("loginPasswordInput").value;
    
    if(password.length >= 4)
    {
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        window.location.replace("home.html");
    }
    else if(password.length < 4)
    {
        document.getElementById("error").textContent = "Password is too short (less than 4 characters)";
    }
}