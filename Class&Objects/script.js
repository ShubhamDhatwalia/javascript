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