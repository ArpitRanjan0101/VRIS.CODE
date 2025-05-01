// STRING TOPIC DISCUSSION 

// Primitive Datatype

// const num =10; variable ke sath const datatype declare hai so no change in value
// num=20;
// console.log(num);

// Non primitive Datatype

// const obj={  // const obj hai with address
//     id:10,
//     balance:200
// }
// obj.id=11;// non primitive datatype me chnage hogya kyuki ,, stack me address store krta hai so when we change the the obj id then woo heap me change hota hai, likin adddress same rakhta hai that's why final output different aati hai
// console.log(obj);

// let obj2={
//     id:20,
//     money:30
// }
// // location of obj2 is 800
// // location of obj is 6521

// obj =obj2; // yeah changes allow nhi hai kyuki yaha par address me change aa rhe hai
// error


// STRING IN JAVASCRIPT START BELOW
let str1="Hello coder army";// double court
let str2='Mai arpit ranjan hu';// single court
let str3=` aur meri life mast chl rhe hai`;// modern way to use backtick to print

let price =80;// suppose yeah backend aa rhe hai to muje fronyend me show krna hai on daliy basis price change ho rahi too ...

console.log("price of the tomato is 50");
//  console.log(str1,str2,str3);

console.log(`price of the tomato is ${price}`);// backtick ka use kiya humne with dollar sign so that frontend me automaticaly value change ho jae

// backtick wale me variable add kr skte hai within the backtick

// STRING concatenation 
let s1="Hello";
let s2=" Coder army";
let s3=s1+s2;
console.log(s3);
console.log(s3.length) // dot length is used to calculate the length of the string

// Ssuppose we want to print "hello coder army" with court ?? answer below

console.log('"Hello coder army"');// we use here single court to print the statment with double court
// similarly
console.log("'hello my darling'");

// Using slash n(\n) to break the line to go into the next line

let message=" i am eternal to win the world.\n since I am the best guy";
console.log(message);

// escape character (\)
// we want to print \n too in the output then we can achieve this one by using escape character

let comment=" hello everyone i am the best guy in this world\\n lead the india at the top level ";
console.log(comment);

// to print particular character we usually use array index way to deal with that.. given below

// ACCESSING THE CHARACTERS
let special ="Arpit";
console.log(special[3]);// here we use index to get the particular character
console.log(special.charAt(4));// alternative way to get character

// to  covert into lowercase
// to convert into uppercase
console.log(special.toLowerCase());// command to convert
console.log(special.toUpperCase());
console.log(special);// original character ke andar koe changes nhi honge , sirf command ke according required answer get hoga

// SEARCHING IN STRINGS

let hero="Hello Coder army Coder";
console.log(hero.indexOf("Coder"));// substring check krta hai ki present hai ki nhi
// upar wale me substring ki first character C konse position pe hai woo check krta hai,, to wo 6th position pe hai then print krega 6 as a output

console.log(hero.lastIndexOf("Coder"));
console.log(hero.indexOf("coder"));// yeah substring yaha pe present nhi hai too output -1 show hoga 
console.log(hero.includes("Coder"));// include yaha par true ya false return krega 

// EXTRACTING STRING
// these are basically two type 
//1. slice( simply meaning hai ki tukra nikalna , SIMPLY KUCH portion extract agar krna hai too)
//2. substring( same as slice but slice take negative index while substring does take negative string, it always take positive string)
            // 01234567(these are positive index from left to right)
let newstring="JannuDon";
             //-8-7-6-5-4-3-2-1 (these are negative index from right to left)       
console.log(newstring.slice(0,4));// 0 to 4 me 4 excluded hoga kyuki range diya hua hai, 0 to 4 tak jitne character hoge utna hi character print hoga
console.log(newstring.substring(0,3));
// since Slice can take negative value so it can print charater with negative index
console.log(newstring.slice(-5,7));// negative index humesa positive index se phele hona chye
// Substr(start,length): extract a substring of a specified length


// REPLACEMENT CONTENT
// replace(oldSubstring , newsubstring):Replace thr first match
// replaceALL(oldsubstring,newsubstring): replace all matches(ES2021+)

 let str10="Hello ji kaise ho ji";
 console.log(str10.replace("ji","Money"));// replace function ka work just kisi particular character ko replace krna hota hai
 console.log(str10.replaceAll("ji","Money"));//while replaceALl ka function all replace hota hai jitna places pe present hai aur un sabhi old content ko agar new se change krna hai agar too

 //SPLITTING STRINGS
 // split(delimiter):splits a string into an array based on a delimiter
 let str11="Money! honey! sunny! funny";
 console.log(str11.split("! "));
 let str12="kela! mela! hot! lisa";
 console.log(str12.split("! "));

 //TRIMMING
 //trim():remove whitespace from both ends
 // trimStart()/trimEnd(): remove whitespace from the start or end

 let str13=" hello ji ";
 console.log(str13);
 console.log(str13.trim());
 console.log(str13.trim().length);
 console.log(str13.length);

 // New way to create string
 let lateststring =new String("Hello Coder Army");// jab bhi new keyword use krege string ke formation keliye too uska type Object hi aaega
 console.log(lateststring);// print krne pe result object ke form me hi aata hai
 console.log(typeof lateststring);





 
