let newBtn = document.createElement("button");
newBtn.innerText="click-me";
console.log(newBtn);

let div = document.querySelector("div");

// div.append(newBtn)
// div.prepend(newBtn)

div.before(newBtn);
div.after(newBtn);


let para = document.querySelector("p");

// para.after(newBtn);

// para.append(newBtn);
// para.prepend(newBtn);

// ****************************************

let newHeading = document.createElement("h1");
newHeading.innerHTML="<i>This is new h1.</i>";

document.querySelector("body").prepend(newHeading);

// delete an Element with DOM+++++++++++++>>>

// para.remove();

// newHeading.remove()
