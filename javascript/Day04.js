// comparison operator
// actually we are here comparing the different things
// Firstly we will compare number to number

// let a1=1;
// let a2=2;
// console.log(a1==a2);// == is comparison operator here 
// // == both are equal
// // < less than ,> greater than
// // <= less tha equal to , >= greater than equal to

// let num= 10;
// let str="10";
// console.log(num==str);
// // type conversion hoga yaha par string to number than compare hoga

// let a3=10;
// let str1="30";
// console.log(a3<str1);

// let a4=20;
// let str4="30s";// here string does not converted into number , actual result is NaN 
// console.log(a4<str4);// here result is false

// // here == double equal to operator just check the value of both side whether it is equal or not


// // To check whether the value along with Datatype are equal or not , we usually use === triple equal to operator

// let as1=20;
// let as5=20;
// console.log(as1===as5);// phele yaha type check krta hai then value check krta hai


// Rules given below
// null == undefined hota hai// true
// null === undefined nhi hota hai // false

// console.log(null==undefined);
// console.log(null===undefined);// null type is object ,undefined type is undefined that's why both are not equal in this case

// null is only equivalent to undefined == , baki woo kisi ke bhi equivalent nhi hoga

// console.log(null==0);// yaha pe type conversion nhi hua , hai yaha pe alag rule chal rha hai
// console.log(null<0);// yaha pe type conversion hoga,,null ko number me convert krega which is equalto zero,, then Q arises ki k zero less than hai zero ke so answer is false hai
// console.log(null>0);//"
// console.log(null<=0);// type conversion ke baad null zero hojaega then zero equal ho skta hai zero ke so answer is true hai
// console.log(null>=0);//"

// Undefined comaprison,, undefined keliye simple rule defined hai ki woo sirf null ke hi equivalent ho skta hai,,aur kisi ke bhi nhi
// console.log(undefined==0);// result is false , in below all will have false since it is only equivalent null
// console.log(undefined<0);// sabhi me type conversion hoga , so after the type conversion result will be NaN,then we will check with all 
// console.log(undefined>0);
// console.log(undefined<=0);
// console.log(undefined>=0);

// comparison between NaN 
// console.log(NaN==NaN);
// let str3="arpit";// agar yaha par conversion hoga number then eska number me conversion NaN aaega jo ki apne niche wale se differ hoga ..
// let str4="sagar";// isiliye both NaN differ hai so, equsl nhi hai

// let abc1=123;
// let abc2="123";
// let abc3=123;
// console.log(abc1==abc2==abc3); //firstly abc1 compare hoga abc2 se result true hoga then compare hoga abc3 so true equal to nhi hota false ke so result false aaya 
// likin agar abc3=true hota too result true aata ;


// console.log(undefined!=null);// Homework,,result=false


// Logical operator
let age=18;
let money=420;
console.log(age>=18&&money>200);
console.log(age>10|| money>200);
console.log(!(age>10));

// Bitwise operator
console.log(4&5);// bitwise comparison hota hai, means bit me convert krke then And operation lgkr final result jo ata hai , wahi end result hota hai..
console.log(11&14);
console.log(11|14);
console.log(5^7);
console.log(5<<3);// this is the case of left shift
// here 5 multiply by 2 power 3// left shift
// 101.0000000000
// after left shift 101000.0000000=40 it would be final answer

// Right shift case below
console.log(20>>2);
// means here 20 divided by 2 power 2 ,, which is equal to 5
// right shift krna hai too .. 
// 20 =10100.00000
// 101.000000,,,point se phele wale digit ko right shift krdo


