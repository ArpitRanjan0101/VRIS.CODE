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


const arr=[10,20,11,18,13];
for(let value of arr){
    console.log(value);
} // here for of loop help us to access the values of arr only , no huslte with for of loop while writing 