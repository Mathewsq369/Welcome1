let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myInput").value;
    document.getElementById("myH1").textContent = `Welcome ${username}`;
}