// method-1 using the window prompt to do so


// let username = window.prompt("What's your user name?");

// console.log(username);

// using a efficient way where we create a text box

let username;
document.getElementById("mySubmit").onclick= function(){
    username = document.getElementById("mytext").value;
    document.getElementById("MyH1").textContent = `Hello ${username}`;
}