// if-else conditon
/**
 * structure: if(condition){
 * (true)}
 * else{
 * (false)}
 *  */ 

var weight =10;
if(weight>20){
 console.log('i will carry it but myself.')
}
else{
    console.log('i will rent a rickshaw.')
}

// if-else condition with && operator
const salary =5000;
const isBcs =true;
const age =27;
if(salary > 20000 && age >25){
    console.log('get married'); //output 'get married' because && operator generate for two conditions.
}
else{
    console.log('try to another man')
}

// if-else condition with || operator
let amount =5000;
let burger =220;
let isshop =true;
if(amount >500 || burger< 200){
    console.log('eat the burger'); // output:eat the burger because:|| operator can generate more than one condition.
}
else{
    console.log('back to home');
}

// multi level condition
const price =5000;
if(price>= 5000){
    const discount =price *10/100;
    const payAmount =price-discount; 
    console.log(discount);
    console.log(payAmount);
}



