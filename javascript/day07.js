// Creating a string using the new keyword
const myString = new String("Hello, World!");

console.log(myString); // Output: [String: 'Hello, World!']
console.log(typeof myString); // Output: object

// MATHS in javascript topic of the day07
let num1=231;
let num2= new Number(231);
let num3= new Number(231);
console.log(num1==num2);// output is true
console.log(num2==num3);// output is false , reason is explained in notebook , check it out  

let num=231.68;
console.log(num.toFixed(3));// decimal ke baad kitne digit tak fix krna hai woo decide krta hai toFixed
console.log(num.toPrecision(4))// toPrecision me number ko short krte hai starting se end tak whether bich me point aae no matter
console.log(num.toExponential(2))// kitne digit tak exponential me convert krta hai woo decide krta hai , esse hum check karte hai parenthesis me number ki value dalkr , ki kitne number tak exponential me convert krna hai
console.log(num.toString());// toString ka use hum string me convert krne keliye krte hai
console.log( typeof num.toString());
console.log(num.valueOf()); // value of just output me value batata hai
 

// ACTUAL  MATHS CONCEPT STARTED FROM HERE
console.log(Math.E);
console.log(Math.LN10);
console.log(Math.PI);
console.log(Math.LOG10E);

// koe random value print krna hai mujhe
// esse random value generated me agar 10 se multiple kr dege to 0 - 9 koe bhi value mil jaegii aur agar mai 1 -10 tk value chahta hu too then we  add with 1 aur agar 1 ke place pe 2 add krege too 2 - 10 print hogi value
console.log(Math.random());
console.log(Math.random()*10);
// 0<=value<1
// 0-9

let num89=23.1;
console.log(Math.floor(num89));// floor hume niche ki value deta hai // simple meaning round off kiye bina jo point se phele ki value aati hai usse hi print krta hai
console.log(Math.ceil(num89));// ceil hume upar ki value deta hai// simple meaning round off krke phir jo value aati hai usse print krta hai
// agar mujhe niche ki value chye random wale function me then we use floor
console.log(Math.floor(Math.random()*10));
console.log(Math.floor(Math.random()*10)+1);// yaha pe 1 -10 value generate krega // output me enter click krne pe koe bhi random value generate hongi jo ki ek time pe ek bar hi print hongi

// muujhe agar 11 -20 tak value generate krna hai too then we just add 11 to that written function
console.log(Math.floor(Math.random()*10)+11);
//(0-9)+11

// TOO much important concept below that is formula for min to max generation of the number
 // like min=40 , max=50;
//  console.log(Math.floor(Math.random()*(max-min+1)+min));// formula

 // explanation of the formula
 console.log(Math.floor(Math.random()*10));
 //  we would like to print 0-10
// mujhe agar 0-10 krna hai too
console.log(Math.floor(Math.random()*11))// output me 0 -10 aeega 
// 30-40
// check the notebook for more detail for below concept
console.log(Math.floor(Math.random()*(40-30+1))+30); 


// LUDo wale game me kaise random generate hota hai number
// 1-6
console.log(Math.floor(Math.random()*(6-1+1)+1));















