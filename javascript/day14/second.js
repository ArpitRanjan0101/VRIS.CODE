// for in loop : isko array ke sath nahi lete hai

// array is also an object ,  isislye hu esme agar kuch add krna chahte too kr skte hai . jike krn dikkat ho skti hai , since array too similar datatype rakhta hai 


// 0:10,
// 1:20,
// 2:40,
// 3:12,
// 4:30,
// name:arpit,
// age:20,

// upar wale sabhi key value ki enumerable true hai isisilye print hoti hai output me , agar enumerable false hoti too print nhi hoti

const arr =[10,20,40,12,30];
arr.name="arpit";
arr.age=20;
for(let key in arr){
    console.log(key,arr[key]);   // yaha pe humne key ke help se index print krege and value access keliye arr[key] likhege
}


// for in loop ka kam hi yahi hai ki woo jata hai key values check krta hai agar true hue too print karwa deti hai , aur agar false hai to print nhi karwati hai


// INTERVIEW QUESTION : why we dont use for in loop in array , becuse it check whether it's enumerable is true or not , if true then print , if false then print nhi krti hai 


// for in loop hum sirf object ke sath use krte hai,array ke sth sirf normal loop use krte hai