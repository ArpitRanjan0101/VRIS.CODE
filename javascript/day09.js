// DATE object is the most important concept , and we will study in this lecture 09
// How to form the date let's see
//  const d= new Date(1000); // yaha pe dekho , maine esse data milisecond me diye then esse usne require data me convert kr diya 
//  const d =new Date();
//  console.log(d);
// //  console.log(d.toDateString());// todatestring hume day , month, date aur year ke sth inform krti hai
// //  console.log(d.toString());
// //  console.log(d.toISOString());

// console.log(typeof d); // Date humra ek object type hai , jo ki hum bol skte hai ki Heap me store hota hai 

// // Date humre system se time and date access krta hai

// // Date humre koe bhi data milisecond me leta hai usse phir , year-month-day-date me convert krta hai

//  console.log(d.getDate());// Date format me date access zero se start hota hai while , string me agar store kiye hai to waha pe one se start hoga 
//  // sun, mon ,tues,wed, thusr,fri,satur..etc
//  //0,1,2,3,4,5,6 /// yaha pe week day ki access zero se start hoti hai
//  console.log(d.getDay());
//  console.log(d.getMonth());
//  // month ki bhi access krne keliye zero se hi start krte hai
//  // jan=0,feb=1,mar=2,april=3,may=4.....
// // simply yaha pe jtine bhi string case me thi unhe date function me number ke through access kiya hai

// console.log(d.getFullYear());// konsa year hai usse access krne keliye
// console.log(d.getMilliseconds());//current time me kitna milli second chal rha usse pta krne keliye use kiya humne
// console.log(d.getMinutes());// current time me kitna minute hua

// console.log(d.getTime());// yeah getTime mujhe sabhi information millisecond provide kr dega

// const now = Date.now();
// console.log(now);// yeah bhi hume same Gettime ki trah time access krke dete hai milliseocnd me 
// GetTime se date.now tak aane me kuch too time lagega , isislye millisecond me variation ata hai

const d =new Date("2025-05-03T10:05:20");// string ke andar jab hum koe date dete hai tab woo one se access hoti hai..uski date and day
// yaha pe hum alag se time bhi add kr skte hai
console.log(d);
console.log(d.toDateString());// humne yaha pe date ko string ke andr store krke rakha hai ,so start one se ho rha hai ,isilye output me may aa rha hai , agar zeo se start hua hota too , yeah april show krta 
const date =new Date(2025,4,26)// yaha pe data number ki form me hai too zero based indexing ho rha hai aur indian standard ke according time batatega
console.log(date.toString());











































