"use strict";
let num = 10;
num = "arpit";
let x = 10;
let val = "rohit";
//---------------------------- 
let money; // whenever we define the variable without assigning any value to it then , tsc define its type as any ,mean we can assign any value to it, then it become dengerour situation , we have to keep away from this situation.
//--------------------------
money = 20;
money = "rohit";
//------------------
let val2; // agar unknown type ki aagyi to kaise tackle krege..
val2 = 20;
val2 = "Rohit";
//-----------------------------
let num = 10;
let x = 10;
let val = "Rohit";
let money; // this any type , we can assign any value to it.
money = "Rohit";
money = 20;
// console.log(money.toUpperCase());
let val2; // we basicallly use when we dont define , wht will be the value of the data.further we will give the condition see below if condition..
val2 = "Rohit";
val2 = 10;
// console.log(val2.toUppercase());   // here it will give an error because firstly we have to consume the value what the type , u are trying to apply ,means we have to define the type of variable confirm , then we can go to console ....whether it is string or number
if (typeof val2 === 'string')
    console.log(val2.toUpperCase());
if (typeof val2 === 'number')
    console.log(val2.toFixed(2));
// Non Primitive
// Defining of an array in tyescript with it's type below..
let arr = [2, 4, 5, 7, 11];
let arr2 = [2, 1, 19, 10]; // if we dont define the type then it also valid , since while hover it shows the type..
let arr3 = ["Rohit", 20, 11, "Sohan"]; // here we have taken the mix type of array and we define also the type explicitily here "|" is sign of union , also we can get the type on hover
arr3.push(10);
let arr4 = ["rohit", 10, false, 11]; // if we try to push other type value then we have to write the type explicitily..
// TUPLE is also an array with fixed size of element  
let tuple = ["Rohit", 10, 11];
// Objects
// inline
let obj1 = {
    name: "Rohit",
    age: 20,
    gender: "female"
};
// Inline defining of the objects
let person;
person = {
    name: "rohit",
    age: 20,
    balance: 420
};
let n1; // inline object defining is similar to this 
n1 = 10;
let c1 = {
    name: "Rohit",
    age: 20,
    id: "fshfsd"
};
;
let obj3 = {
    names: "Rohit",
    age: 20,
    position: "manager",
    id: 210
};
// Interface vs Type(h.w to see )
// Function
// Classes
