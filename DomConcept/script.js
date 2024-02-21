// console.dir(document.body.childNodes[1]);
// console.log(document.body);
// document.body.style.background ="skyblue";
// document.body.childNodes[3].innerText = "abcd";


// DOM Manipulation -----------------------------------------------

// Selecting with id class --------------------
console.log(window.document.getElementById("heading"));
console.dir(document.getElementsByClassName("headings"));
console.dir(document.getElementsByTagName("p"));

// QuerySelector   ---------------

console.dir(document.querySelector("p"));
console.dir(document.querySelector("#heading"));
console.dir(document.querySelectorAll(".headings"));

let firstElement = document.querySelector("#btn");
console.log(firstElement.tagName);

console.dir(document.querySelector("div").children);

console.dir(document.querySelector("h1").nextElementSibling);