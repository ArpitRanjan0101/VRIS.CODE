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
//     fun();
// }

// names(function greet(){
//     console.log("i am call back function");
// })    // second way of function call me hum khud function calling ke andr hi dusre function ko define kr skte hai.


// // Hum as a fat arrow function hi call kr skte hai

// names(()=>{
//     console.log("I am call back function");
// });



// DATA agar backend se fecth kr rhe hai too

function fetchData(){    // Backend se data fetch krega aur yaha  pe show kr dega
    // bhut sara code hog yaha pe
    console.log("i am fetching data");
}


setInterval(fetchData,5000);
