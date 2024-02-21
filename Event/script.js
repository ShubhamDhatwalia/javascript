// let btn1 = document.querySelector("#btn1");
// btn1.onclick = ()=>{
//     console.log("btn1 clicked");
// }

// let btn2 = document.querySelector("#btn2");
// btn2.ondblclick = ()=>{
//     console.log("btn2 clicked");
// }

// let div = document.querySelector("div");
// div.onmouseover =()=>{
//     console.log("inside div");
// }

// event object -----------------------

// let btn1 = document.querySelector("#btn1");
//  btn1.onclick = (e)=>{
//     console.log(e.target);
//     console.log(e.type);
//  }


 // Event Listeners             ----------------------------

let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () =>{
    console.log("btn1 clicked handler1");
});

btn1.addEventListener("click", ()=>{
    console.log("btn1 cliked handler2");
});

function handler3(){
    console.log("btn1 clicked handler3");
}
btn1.addEventListener("click", handler3);


let btn2 = document.querySelector("#btn2");
btn2.addEventListener('dblclick', ()=>{
    console.log("btn2 cliked twice");
});

// remove Event --------------------------

btn1.removeEventListener("click", handler3);


// practice question   
// Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode
// when clicked again


let modebtn = document.querySelector("#mode");

let currMode = "light";
modebtn.addEventListener("click", ()=>{
    if(currMode =="light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor ="black";
    }else{
        currMode ="light";
        document.querySelector("body").style.backgroundColor ="white";
    }
});