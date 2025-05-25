// -------------Function-------------

// function greet(){ // function defining
//     console.log("hello arpit ranjan");
//     console.log("my frnd name is kajal");
//     console.log("we are working together since 5 years");
// }
// greet();     // this is call statement of the fn
// greet();      // by using this we can call the stat into the fn multpiple times just calling to it.

// ---------Above is the normal function program


// --------------- ADD two numbers program-----------

// function sum(num1,num2){   // fn ka jo name usse hi call krna hota hai speeling bhi same hona chye and it contain the parameter
//     console.log(num1+num2);
// };

// sum(3,4); // argument

// -------------Multiplication :using return----------- 

// function multiply(num1,num2){
//     return num1*num2;
// }
// console.log(multiply(3,5));


// ----------2nd way to call below--------------

// function multiply(num1,num2){
//     return(num1*num2);
// }

// let result=multiply(4,5);
// console.log(result);


///--------- WE can store function in variable too--------

// const fun=function(){
//     console.log("hello world");
//     console.log("my name is arpit ranjan");
// }
// fun();


//------------- ONe more thing too be noted-----------

// const fun =function(){
//     console.log("hello everyone");
//     console.log("kaise ho applog");
//     return "rukjao na";
//     // console.log("mai khuss hu tum kaise ho  bro"); // yeah line kabhi execute nhi hoga..
// }

// console.log(fun());// in this statment first each console will be printed then return will be printed..return ke andr agar koe console likhte hai too wo return nhi hoga note this one.



//----------------Fat Arrow function-------------
// same function it will perform but it make the code short and crispy and easier 

// first code
// const fun=()=>{
//     console.log("hello coder army"); 
// }
// fun();

// // second code

// const sum=(num1,num2)=>{return num1+num2}; // here we use return so tht it can the value the value to console 
// console.log(sum(2,5));

// // Third way to write the fat arrow function


// const multiply=(number1,number2)=> number1*number2; // note krne wali baat yaha yeah hai ki pta nhi chal rha hai ki yeah function bhi hai...so be careful , agar single line me likh rhe hai too return likhne ki bhi jrurat nhi hai

// console.log(multiply(5,6));


// // IF we have single parameter then we dont put it into the braket,see below

// const cube=Number=>Number*Number*Number; // for single parameter we dont use even the bracket
// console.log(cube(4));


//-----------USe Of REST operator

// const sum=function(...number){ 

//     // useful hai rest operator
//       // here we use rest operator since we dont know , how many number for additon will appear so use rest operator

//     console.log(number);
// }
// sum(2,4,5); 
// sum(6,7,8,9,5);
// // output yaha pe array ke form me aaega , then we can use for loop to get the sum of the present array

// // ----------SPREAD OPerator----------

// let arr=[1,2,3,4,5,6];
// let arr2=[...arr];
// console.log(arr2);


// _-----------PAssing the objects as the value---
 
let obj={
    name:"Arpit",
    age:20,
    amount:530,
}
function fun(obj1){
    console.log(obj1.name ,obj1.amount);
}
fun(obj);


// -------(DESTRUCTURING OF OBJECT)   WE CAN destructure the object mean , we can extract the particular value which we needed

const obj1={
    name:"Heer",
    age:19,
    amount:1000,
}

function funn({name,age}){
    console.log(name,age);
}
funn(obj1);


















