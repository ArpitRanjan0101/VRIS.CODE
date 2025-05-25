// ---------------WE WILL SEE HERE THE IF-ELSE AND LOOP IN JAVASCRIPT-------------


// if -else
// let age=30;

// if(age>=18){
//     console.log("eligible for vote");
// }
// else{
//     console.log("Not eligible to vote");
// }


//--------------if elseif else

// let age =19;

// if(age<18){
//     console.log("KID");
// }
// else if(age>45){
//     console.log("OLD");
// }
// else {
//     console.log("ADULT");
// }


//___________-----FOR MUITIPLE CONDITION------------

//    let num=6;     // input taken from the from user
//    switch(num)            // switch(new Date().getDay())
// {
//     case 0:
//         console.log('SUNDAY');
//         break;
//     case 1:
//         console.log('MONDAY');
//         break;
//     case 2:
//         console.log('TUESDAY');
//         break;
//     case 3:
//         console.log('WEDNESDAY');
//         break;
//     case 4:
//         console.log('THURSDAY');
//         break;
//     case 5:
//         console.log('FRIDAY');
//         break;
//     case 6:
//         console.log('SATURDAY');
//         break;
//     case 7:
//     console.log('SUNDAY');
//     break;
//     default:
//     console.log('not the day');
// }

// for(let i=0;i<20;i++){ // we can take const in place of let , since it will become the constant value that will not change
//     console.log("hello arpit how are you");
// }


// -------------- SUM OF NUMBERs---------------------

// let sum=0;
// for(let i=0;i<=10;i++){
//     sum=sum+i;
// }
//  console.log(sum);


// -----------NESTED FOR LOOP--------------

//12345
//12345
//12345
//12345
//12345
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++)
//     {
//         console.log(j);
//     }
// }


// -------------------SCOPE IN JAVASCRIPT--------------------

// Global scope , local scope(functional scope),block scope
// let a=10;
//var b=20;
//const c=30;
// all above are the Global scope 

 // Functional scope(local scope)

//  function greet(){
//     let a=10;   // all this can be accessed within the function
//     var b=20; // we can not access it out of the function
//     const c=30;
//      console.log("Hello everyone");
//      console.log(a,b,c);
//  }
//  greet();

// Block scope
// var amount=400;
// var amount=200;
// var amount =900;
// var amount=100; 
// if(true){
//     let a=12;
//     var b=20;
//     const c=30;
// }
// console.log(b);     // out of the block , we cant access the let and const while var can be accessed eve if the the above if statment is ended now yet.

 // let and const muiltple scope define nhi krne dete hai while var allow kar deta hai , jiske krn required data access krb ho jta hai kyuki muiltple var define hote hai too unke access krne keilye dikkat aa jati hai


 let amount=20; // global scope
 if(true){
    let amount=20; // block scope
    console.log(amount);
 }


 // In case of the Function we can call it before defining of the of the function..it will happen only in simple function ,.. but if we try to call the fn having stored in variable , and will try to call that variable will unable to call , no output will come

//  greet();
//  function greet(){
//     console.log("hello coder army");
//  }

//  meet();
//   const meet=function(){
//     console.log("hello guys");
//   } // no output , since we cant call the varibale before defining it

// Question is that , we have access the object keys and values


const obj={
    name:"arpit",
    age:20,
    amount:340,
    city:"hazaribagh"
}
const key=Object.keys(obj);
// for('name' ,'age',amount',city')
for(let i=0;i<key.length;i++){
    console.log(obj[key[i]]);
}



























