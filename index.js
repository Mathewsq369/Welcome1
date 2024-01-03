let username;
const mySubmit = document.getElementById("mySubmit");
const myH1 = document.getElementById("myH1")

mySubmit.onclick = function(){
    username = document.getElementById("myInput").value;
    myH1.textContent = `Welcome ${username}`;
}
