// const num:number=10;

// interface Person{
//     name:string,
//     age:number,
//     gender:string,
//     aadhar?:number // kabhi kabhi aissa ho skta hai ki aadhar exist nhi karta hai then we make it optional, by just applying ? sign
// }
// const obj:Person={
//     name:"arpit",
//     age:20,
//     gender:"Male",
//    aadhar:1234  // agar aadahr ko humne optional ban diya hai too usse hata bhi denge to koe fark nhi padega..
// }

// ? is known as optional keyword..

 
// utility Type for Objects
// 1. Partial<Person>
// 2.Required<Person>
// 3.Readonly<Person>



// Latest examples


// interface customers{
//     names:string,
//     ages:number,
//     balances:number
// }

// const obj3:Partial<customers>={
//     names:"arpit",
//     ages:21,
//     balances:210
// }

// Partial :all the property becomes optional
// Requried:All property should be filled
// Readonly:The property can only be read, write optioanl is not available


// HERE WE WILL STUDY ARRAY OF OBJECTS(array ke andr objects kaise rakhege)

interface people{name:string,age:number};

const arr:people[] =[{name:"arpit",age:20},{name:"mohit",age:18}];

 
// Function in typescript

// for one argument 
function greet(a:number):number{
    console.log(a);
    return a+5;
}
console.log(greet(10))
;

// for two arguments 

function meet(msg:string,val:number):void{
    console.log(msg,val);
}

console.log(meet("arpit ranjan",4));