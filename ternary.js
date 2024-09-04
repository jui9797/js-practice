// syntax: condition ? true : false;

// 1
let age =15;
 age>= 18? console.log('vote dio') : console.log('bari jaw');

// 2
 let price =500;
 const isLeader =false;
 isLeader === true ? console.log(0):console.log(price+100);

// 3

const money =400;
money>= 150 ? console.log('get mango') : console.log('cannot get mango');

// 4 semi-advanced ternary
let cost =100;
let isStudent = false;
// if(isStudent === true){
//     if(cost > 200){
//         console.log(cost =cost/2)
//     }
//     else{
//         console.log(cost =0)
//     }
// }
// else{
//     console.log(cost =cost +1000)
// }

(isStudent=== true) ? (cost > 200) ? console.log(cost =cost/2) :console.log( cost =0) : console.log(cost =cost +500);