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



let n =8;

for(let i=0; i<n; i++){
    let pattern ='';
    for(let j=0; j<n; j++){

        if(i==0 || i == Math.floor(n/2) || i==n-1){
            pattern += 'S';
        }
        else if(j==0 && i<Math.floor(n/2)){
            pattern += 'S';
        }
        else if(j==n-1 && i>Math.floor(n/2)){
            pattern += 'S';
        }
        else{
        pattern += ' ';
        }
    }
    console.log(pattern);
}