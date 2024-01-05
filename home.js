let username = localStorage.getItem('username');
let email = localStorage.getItem('email');
const homeH1 = document.getElementById("homeH1");
const homeUsername = document.getElementById("homeUsername");
const homeEmail = document.getElementById("homeEmail");

if (username)
{
    homeH1.textContent = `Welcome ${username}`;
    homeUsername.textContent = `Username: ${username}`;
    homeEmail.textContent = `Your email adress is ${email}`;
}