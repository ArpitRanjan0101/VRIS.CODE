// let user={
//     name:"arpit",
//     age:20,
// }

// Object.defineProperty(user, 'name',{
//     writable:false,
// }); 
// console.log(Object.getOwnPropertyDescriptor(user,"name")) // by default here writable is true , but we define the writable as false and here when we try to getownprops then it print the writable as false 



// FOR OF LOOP , We will study here , see below

// we can implement array using for of loop , or through using simple for loop


// const arr=[10,20,11,18,13];
// for(let value of arr){
//     console.log(value);
// } // here for of loop help us to access the values of arr only , no huslte with for of loop while writing the code

// let str ="arpit is good boy"; // here , number value is printed of given str on iterating..
// for(let value in str)
// {
//     console.log(value);
// }



// const obj ={
//     name:"arpit",
//     age:22,
//     gender:"male"
// };

// for(let value of obj){
//     console.log(value); // object iterable nhi hota hai , kyuki har ek element visit krna pta nhi hota
// }

// we can iterate using Object.value or Object.keys , but it will behave as array 



// for(let value of Object.keys(obj)){
//     console.log(value,obj[value]);
// }



// So , for in loop is used with Object ,while For of loop is used with array , string


// For Each loop


let arr =[10,20,30,40,50];
arr.forEach()