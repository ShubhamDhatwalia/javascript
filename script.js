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

//practice -----------------------------------------------


// let b = prompt("Enter a number");
// if(b%5==0){
//     console.log("b is multiple of 5");
// }
// else{
//     console.log("b is not multiple of 5")
// }


// loops --------------------------------------------------------------

for(let i =1; i<=5; i++){
    console.log("Shubham");
}


// for of loop --------------------------------------------------
let str = "Shubham";
let size =0;
for(let i of str){
    console.log(i);
    size++;
}
console.log(size);


// for in loop ------------------------------------------------

let stu ={
    name:"Shubham",
    age: 22,
};
for(let i in stu){
    console.log("key= ", i, "value =", stu[i]);
}


// Strings ----------------------------------------------------


let str1 ="Shubham";
console.log(str1.length);
console.log(str1[0]);


// Template literal ---------------------------------------------

let specialString = `This is a template literal`;
console.log(specialString);

let obj ={
    item: "pen",
    price: 10,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees.`;
console.log(output);


//Arrays --------------------------------------------------------------


let marks = [96, 44, 44, 35, 34];
console.log(marks);
console.log(marks.length);
console.log(marks[0]);


let heroes =["ironman", "thor", "hulk", "spiderman"];
console.log(heroes);

for(let i=0; i<heroes.length; i++){
    console.log(heroes[i]);
}


// for of loop ------------------------------------------------------
for(let hero of heroes){
    console.log(hero);
}

// for in loop --------------------------------------------------

for(let hero in heroes){
    console.log(heroes[hero]);
}


//Methods in array --------------------------------------------

let foodItems =["Apple", "Tomato", "Potato", "Litchi"];
foodItems.push("Chilli", "Burger");
console.log(foodItems);

let deletedItem = foodItems.pop();
console.log(deletedItem);
console.log(foodItems);

console.log(foodItems.toString());


// push, pop, concat, to String, unshift, shift, slice, splice

// Function -----------------------------------------------------------

function myfunction(){
    console.log("learning");
}

myfunction();


function sum(a, b){
    console.log(a+b); 
}

sum(10,20);


function add(a, b){
    s = a+b;
    return s; 
}
let val = add(10,20);
console.log(val);


// arrow function ----------MODERN JS ----------- -------------------------------------------------

let arrowSum = (a,b)=>{
    console.log(a+b);
}
arrowSum(10,10);


const mult = (a,b)=>{
    console.log(a*b);
}
mult(10,10);


//  Practice Work -----------------------------------------------

const Vowels = (s)=>{
    let count =0;
    for(let i=0; i<s.length; i++){
        if(s.charAt(i) == 'a' || s.charAt(i) == 'e' || s.charAt(i) == 'i' || s.charAt(i) == 'o'|| s.charAt(i) == 'u'){
        count ++;
        }
    }
    return count;
}

console.log(Vowels("Shubham"));



// For Each loop in array  ----------------------------------------------

let arr = [1,2,3,4,5];
arr.forEach(function printValue(val){
    console.log(val);
});


arr.forEach((val, idx, arr) =>{
    console.log(val, idx, arr);
});

arr.forEach(function square(val){
    console.log(val*val);
})


// Map in Array  ----------------------------------------------

let newarr = arr.map((val) =>{
    return val*val;
});
console.log(newarr);



// Filter in Array --------------------------------------------

let newArr = arr.filter((val)=>{
    return val%2 == 0;
});
console.log(newArr);


// Reduce in Array ---------------------------------------------

const result = arr.reduce((res, curr)=>{
    return res+curr;
});
console.log(result);