/*
let div = document.querySelector("#box");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);


let para = document.querySelector("p");
let paraAtt = para.getAttribute("class");
console.log(paraAtt);

let changeAtt=para.setAttribute("class","newClass");
console.log(changeAtt)
*/

let div = document.querySelector("div");
console.log(div);

div.style.backgroundColor="green";
div.style.backgroundColor="purple";

// div.style.visibility="hidden"

div.style.fontSize="26px";
div.innerText="Hello!"
