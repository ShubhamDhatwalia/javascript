let div = document.querySelector("div");
console.log(div);
console.dir(div.style);
div.style.backgroundColor = "yellow";



// inner HTML or text or textContent       ------------

let heading = document.querySelector("h1");
heading.innerHTML ="<b>New Heading</b>";
console.log(heading.textContent);
heading.style.visibility = "visible";

//insert inside tag    ------------------------
let heading2 = document.querySelector("h3");
heading2.append("from apna college");



let divs = document.querySelectorAll(".box");
// divs[0].innerText = "new";
// divs[1].innerText = "new";
// divs[2].innerText = "new";
for(div of divs){
    div.innerText = "new";
}


// Attributes                   ------------------
let name = document.querySelector(".att");
console.log(name.getAttribute("class"));
console.log(name.setAttribute("class", "attribute"));
console.log(name.getAttribute("class"));


// Insert new Tags or elements ----------------------------------
let newBtn = document.createElement("button");
newBtn.innerText ="Click Me";
console.log(newBtn.innerText);

let place = document.querySelector(".btn");
place.append(newBtn);


// Qs. Create a new button element. Give it a text “click me”
// , background color of red & text color of white.
// Insert the button as the first element inside the body tag