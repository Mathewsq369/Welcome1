let username;
let email;
let password;
let confPassword;
const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = function(){
    event.preventDefault();
    username = document.getElementById("usernameInput").value;
    email = document.getElementById("emailInput").value;
    password = document.getElementById("newPasswordInput").value;
    confPassword = document.getElementById("confirmPasswordInput").value;
    
    if(password == confPassword && (password.length >= 4 && confPassword >= 4))
    {
        password = confPassword;
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        window.location.replace("home.html");
    }
    else if(password == confPassword && password.length < 4)
    {
        document.getElementById("error").textContent = "Passwords are too short (less than 4 characters)";
    }
    else
    {
        document.getElementById("error").textContent = "Passwords do not match!!";
    }
}