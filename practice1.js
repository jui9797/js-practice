/***
 * Task-1
You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.
*/
let money =1000;
let apple =500;
let orange =200;
let sum =apple+orange;
let moneyBack =money-sum;
console.log(moneyBack);

/**
 * Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
 */
let Bangla =75.25;
let Mathematics =65;
let Biology =80;
let Chemistry =35.45;
let Physics =99.50;
let add = Bangla+ Mathematics+ Biology+ Chemistry+ Physics;
let avarage =add/5;
console.log(parseFloat(avarage.toFixed(2)));


/**
 * Task-3
You task is to divide the given number by 5 and show the remainder as the output.
*/
let number =119;
let modulus =number% 5;
console.log(modulus);

/*
*Task-4
What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers.
*/
 
var a =isNaN('11');
console.log(a);
// output=false explaination:'11' is string variable but it can convert to a number. so tne result is false. because 11 is a number.

var b =isNaN(2-10);
console.log(b);
// output= false explaination:2-10=-8 -8 is a negative number.so isNaN showed false in output.
