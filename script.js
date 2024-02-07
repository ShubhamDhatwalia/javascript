// console.log('Hello');
// //alert("Practice Work");
// age = 24;
// console.log(age);


// x = null;
// console.log(x);

// y = undefined;
// console.log(y);

// isFollow = false;
// console.log(isFollow);



// Variables ----------------

let name = "Shubham";
console.log(name);

name = "Dhatwalia";
console.log(name);

let age = 22;
console.log(age);



const fixedAge = 22;
console.log(fixedAge);
// fixedAge = 23;
// console.log(fixedAge);


// Blocks ------------------

{
    let a = 10;
    console.log(a);

}
{
    let a = 10;
    console.log(a);
}


//  Objects ------------------

const student ={
    fullname : "Rahul",
    age: 22,
    cgpa: 8.2,
    isPass: true
};

console.log(student);
console.log(student.age);

student.age = student.age +1;
console.log(student.age);
console.log(typeof student);
console.log(typeof student.age);


// Conditional Statements         ------------------------------------------------------


let Voterage = 19;

if(Voterage>18){
    console.log("You can vote");
}


let mode = "blue";
let color;

if(mode == "dark"){
    color = "black";
}
else{
    color = "white";
}
console.log(color);


// odd or even     ------------------------------------------------

let a =20;
if(a%2==0){
    console.log("a is even");
}
else{
    console.log("a is odd");
}