// call back function

// function names(){
//     console.log("hello i am arpit");
// }

// function greet(){
//     console.log("i am call back function");
// }

// names();
// greet();  


// FIRST WAY FOR CALL BACK FUNCTION

// function names(fun){
//     console.log("hello i am arpit");
//     fun();
// }

// function greet(){
//     console.log("i am call back function");
// }

// names(greet);   // function calling ke andr ki dusre function call ko pass kr diye as a reference



// SECOND WAY FOR CALL BACK FUNCTION


// function names(fun){
//     console.log("hello i am arpit");
//     fun(); // from here function is called for execution
// }

// names(function greet(){
//     console.log("i am call back function");
// })    // second way of function call me hum khud function calling ke andr hi dusre function ko define kr skte hai.


 // Hum as a fat arrow function bhi call kr skte hai see below

// names(()=>{
//     console.log("I am call back function");
// });



// DATA agar backend se fetch kr rhe hai too

function fetchData(){    // Backend se data fetch krega aur yaha  pe show kr dega
    // bhut sara code hog yaha pe
    console.log("i am fetching data"); // we need that , this function should call in every after 5 seconds
}


setInterval(fetchData,5000); // so we write here  to function call in every 5 second , here written in milisecond



// simply call function kuch aur nhi , ek function banya humne aur dusre function o humne as an argument bhej diya hai yaha pe



