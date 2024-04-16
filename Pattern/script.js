// let n = 5;

// for(let i=1; i<=n; i++){
//     let pattern ='';
//     for(let j=1; j<=n-i; j++){
//         pattern += ' ';
//     }
//     for(let k=1; k<=i*2-1; k++){
//         pattern += '*';
//     }
//     console.log(pattern);
// }

// for(let i=n-1; i>0; i--){
//     let pattern = '';
//     for(let j=1; j<=n-i; j++){
//         pattern += ' ';
//     }
//     for(let k=1; k<= i*2-1; k++){
//         pattern += '*';
//     }
//     console.log(pattern);
// }



// let n =8;

// for(let i=0; i<n; i++){
//     let pattern ='';
//     for(let j=0; j<n; j++){

//         if(i==0 || i == Math.floor(n/2) || i==n-1){
//             pattern += 'S';
//         }
//         else if(j==0 && i<Math.floor(n/2)){
//             pattern += 'S';
//         }
//         else if(j==n-1 && i>Math.floor(n/2)){
//             pattern += 'S';
//         }
//         else{
//         pattern += ' ';
//         }
//     }
//     console.log(pattern);
// }



let name = prompt("Enter Name:");
let department = prompt("Enter department :");

let dept = department.toLowerCase();

switch(dept){
    case 'hr' :
        console.log(name+" your seat is on Ground floor");
        break;

     case 'mobile' :
        console.log(name+" your seat is on 4th floor");
        break;
        
     case 'digit marketing' :
        console.log(name + " your seat is on 1st floor");
        break;

     case 'seo' :
        console.log(name + " your seat is on 2nd floor");
        break;

     case 'web development' :
        console.log(name +" your  seat is right side on 3rd floor");
        break;

     case 'web intern' :
            console.log(name+" your seat is left side on 3rd floor");
            break;

     default :
            console.log("Invalid input");
}