// objects --------------------------------

const student ={
    fullName : "Shubham",
    marks : 60,

    printMarks : function(){
        console.log("marks = ", this.marks);
    }
};

const employee = {
    calcTax(){
        console.log("tax rate is 10%");
    }
};

const karanArjun ={
    salary : 50000,
};

karanArjun.__proto__ = employee;



///      class with objects -------------------------



class ToyotaCar{

    ///  Constuctor ---------------------------------

    constructor(mileage){
        console.log("creating new object");
        this.mileage = mileage;
    }

    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar(18);
fortuner.setBrand("Toyota");


//  Inheritence ----------------------------------------------

class Person{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class Engineer extends Person{   
    work(){
        console.log("Solve problems, build something");
    }
}

let Shubham = new Engineer();


//  Super keyword ----------------------------------------

class Parent{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log("eat");
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
        console.log(name);
    }

    work(){

        super.eat();
        console.log("Working");
    }
} 

let obj = new Child("Shubham");



// Synchronous && Asynchronous -------------------------------

// //Synchronous--------
// console.log("hello1");
// console.log("hello2");

// // Asynchronous -----------

// console.log("hello1");

// setTimeout(()=>{
//     console.log("hello2");
// },2000);

// console.log("hello3");





//  Callback functions ---------------------------

function sum(a,b){
    console.log(a+b);
};

function calculator(a, b, sumCallback){
    sumCallback(a,b);
};

calculator(1,2,sum);



// Callbackhell -------------------------------------

// function getData(dataId,  getNextData){
//     setTimeout(()=>{
//         console.log("data"+dataId);
//          if(getNextData){
//              getNextData();
//          }
//     },2000);
// }

// getData(1, ()=>{
//     getData(2, ()=>{
//         getData(3, ()=>{
//             getData(4);
//         });
//     });
// });



//  Promises -----------------------------------------

// let promise = new Promise((resolve, reject)=>{
//     console.log("I am a promise");
//     resolve("sucess");
//     // reject("some error");
// });

// promise.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


function getData(dataId, ){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("success");
            reject("error");
        },5000);
    });
};


// let p1 = getData(1);
// p1.then((res)=>{
//     let p2 = getData(2);
//     p2.then((res)=>{}).catch((err)=>{});

// }).catch((err)=>{});


// Actual proomise chaining ----------------------------------

// getData(1).then((res)=>{
//     return getData(2);
// }).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


// Asysnc - await ---------------------------------------------

// async function getAllData(){
//     await getData(1);
//     await getData(2);
// }
// getAllData();




// IIFE   --- Immediately Invoked Function Expression ----------

(async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
})();



// Promise chain --------------------------------------------


// function asynfunction1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("some Data 1");
//             resolve("sucess");
//         },4000)
//     })
// }

// function asynfunction2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("some Data 2");
//             resolve("sucess");
//             reject("error");
//         },4000)
//     })
// }



// console.log("fetching some data-------");
// asynfunction1().then((res)=>{
//     console.log(res);

//     console.log("fetching some data-------");
//     asynfunction2().then((res)=>{
//         console.log(res);
//     }).catch((err)=>{
//         console.log(err);
//     });

// }).catch((err)=>{
//     console.log(err);
// });


