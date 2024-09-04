/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age =19;
let isStudent =true;
let ticket =800;
if(age < 10){
    console.log('free')
}
else if(isStudent){
    console.log(ticket =ticket/2)
} 
else if(age >= 60){
    console.log(ticket =ticket*0.15)
}
else{
    console.log(ticket)
}

