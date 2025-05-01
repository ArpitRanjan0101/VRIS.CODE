// Number , string, boolean, null,undefined,Bigint,Symbol( we have studied earlier lecture)
// we will study here operators in this Day 03
// Non primitive data type
//= array, object,function
// let arr=[10,20,30,"arpit"];// in javascript any type of datatype can be kept in it  while in other languge we cant
// console.log(arr);
// console.log(typeof arr);// result=object

// // Object( how to create it)
// // Key:value
// let obj = {
//     user_name: "arpit",
//     account_number:25965965597,
//     balance:580
// }
// console.log(obj);
// console.log(typeof obj);

// // function ( we can store function in variables)
// let fun = function(){
//     console.log("Hello arpit ranjan")
// }
// fun();
// console.log(typeof fun);// result=function 


// Type conversion we will study onwards

// let account_balance ="100";// string to number conversion
// let num = Number(account_balance);// we have converted here string into number through using number constructor
// console.log(typeof account_balance);
// console.log(typeof num);

// // boolean to number conversion

// let x= false;
// console.log(Number(x));// here we converted boolean into number through using number constructor

// let account ="200vs";
// console.log(Number(account)); // here we get NaN as a result since we tried to convert it into double braces variables into number which is actually not a string

// let bal="240s";
// console.log(Number(bal));

// // Null

// let x1 =null;
// console.log(Number(x1));

// // Undefined
// let x2;
// console.log(Number(x2));// in undefined case result also come NaN(not a number)

// // String ke andar convert krna hai
// let ab =20;
// console.log(String(ab));
// console.log(typeof String(ab));

// let az=false;
// console.log(String(az));// yaha pe string me convert hokar "false" yeah wala answer aa rha hai actually even for "true"

// // to convert it into boolean

// let abc ="strarpit";
// console.log(Boolean(abc));// result=true when we convert it into boolean type
//  // strin jab empty hogi tab false dega

//  let abz="";
//  console.log(Boolean(abz)); // result=false since here there is an empty string

//  let sdc=" ";// here we have given space
//  console.log(Boolean(sdc));// we put here an space which keep some value that's why it return true as result


// OPERATORS

//Arithematic operators
console.log((((6*(3+18))/6)-9));
// divide , multiply left to right associativity
// Add sub left to right associativity

// modulous always give remainder

console.log(20%3);

// ++ increment operator , -- decrement operator

let sum=20;
console.log(sum++);
// while
let Sum =20;
Sum++;
console.log(Sum);