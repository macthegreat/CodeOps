

alert("this is test");

let heading=document.getElementById("main_heading");


console.log(heading);

let newHeading=document.getElementsByClassName("head")

console.dir(newHeading)

let divselector=document.querySelectorAll("div");

console.dir(divselector)

let onedivselector=document.querySelector("div");

console.dir(onedivselector.children);

let username=document.getElementById("uname");
console.dir(username);

let password=document.getElementById("pass");
console.dir(password);


let cred=document.getElementById("btn-login1");
cred.addEventListener("click" , alert("hello this is test from js"));
