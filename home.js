let username = localStorage.getItem('username');
const homeH1 = document.getElementById("homeH1");

if (username)
{
    homeH1.textContent = `Welcome ${username}`;
}