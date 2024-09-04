// Types of variables
/**1. number(integer, float, odd, even)
 * 2.string
 * 3.boolean(true, false)
 * 4.undefine
 * 5.null
 * 
 */




// number(integer)
let number =25;
console.log(number);

let number2 =2.4567686;
// toFixed number k stirng a convert kore tai again number a convert korte ParseFloat/ParseInt/Number method use korte hoi.
console.log(parseFloat(number2.toFixed(4)));
console.log(Number(number2.toFixed(3)))

// string
let me ="jannat";
console.log(me)

// boolean
let isActive =true;
console.log(isActive);
let isRain =false;
console.log(isRain);

// undefined
let we 
console.log(we) //output undefined 

// null
let value =null;
console.log(value); //output null (string)

// some rules of declaring a varible
/**1. no keyword in variable name.
 * 2. no space or gap in variable name.
 * 3. no quote.
 * 4. cannot start with a number but number other than the first letter is allowed.
 * 5. Name is case sensitive.
 */

// Naming cases
let my_address_is = "naogaon"; //snake-case
let myAddressIs = "naogaon";  //camel-case  (we use mostly)
let MyAddressIs = "naogaon";  //pascal-case

// typeOf
let child =5;
let child2 = 'girl';
let isHappy = true;
let man
let boy = [];
let house = '';
let empty = null;
console.log(typeof child);
console.log(typeof child2);
console.log(typeof isHappy);
console.log(typeof man);
console.log(typeof boy);
console.log(typeof house);
console.log(typeof empty);