
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
let collector={};

function submit(){
    
    console.log(username.textContent);
    console.log(password.textContent);
}

let cred=document.getElementById("btn-login1");
// cred.addEventListener("click" , (e) =>{
//     const li = e.target.closest("form");
//     const uname=form.dataset.textContent;
// });
cred.addEventListener("click", submit())
// list.addEventListener("click", (e) => {
// const li = e.target.closest("li");
// if (!li) return;
// const id = li.dataset.id;
// removeItem(id); // act on that row
// });