let h2= document.querySelector("h2");
h2.innerText =h2.innerText + " from apna college students"


let divs = document.querySelectorAll(".box");
// console.log(divs[0]);


let ind = 1;

for (const div of divs) {
    // console.log(div.innerText);
    div.innerText=`new unique value of div ${ind}`;
    ind++;
}

// divs[0].innerText="First Div";
// divs[1].innerText="Second Div";
// divs[2].innerText="Third Div";