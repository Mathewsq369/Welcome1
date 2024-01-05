let count;
let username;
let email;
let password;
let confPassword;
const mySubmit = document.getElementById("mySubmit");
const myH1 = document.getElementById("myH1");

mySubmit.onclick = function(){
    count = 0;
    username = document.getElementById("usernameInput").value;
    email = document.getElementById("emailInput").value;
    password = document.getElementById("newPasswordInput").value;
    confPassword = document.getElementById("confirmPasswordInput").value;
    
    if(password == confPassword && password.length >= 4)
    {
        password = confPassword;
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        window.location.href = "home.html";
    }
    else if(password == confPassword && password.length < 4)
    {
        count += 2;
    }
    else
    {
        count++;
    }
}

if (count % 2 == 1)
{
    document.getElementById("error").textContent = "passwords do not match!!";
}
else if(count % 2 == 0)
{
    document.getElementById("error").textContent = "Passwords are too short (less than 4 characters)";
}