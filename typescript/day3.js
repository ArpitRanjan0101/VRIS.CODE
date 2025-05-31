"use strict";
// const num:number=10;
;
const arr = [{ name: "arpit", age: 20 }, { name: "mohit", age: 18 }];
// Function in typescript
// for one argument 
function greet(a) {
    console.log(a);
    return a + 5;
}
console.log(greet(10));
// for two arguments 
function meet(msg, val) {
    console.log(msg, val);
}
console.log(meet("arpit ranjan", 4));
