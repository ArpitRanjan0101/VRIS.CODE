// How to create object
// store the value in key value pair
// const obj ={
//       0:50,
//       1:40,
//       2:30,
//       name:'arpit',
//       account_balance:340, // key me agr hum kuch likh rhe hai too waha pe space nhi d skte hai like account number,,,but uske place pe hume string ke form me declare kr skte hai like "account number" tab phir hum access kr skte hai
//       gender:"Male",
//       age:20
//     //   "account number":23021605
// }
// console.log(obj);
// console.log(typeof obj);// output=obj

// array ka bhi use krke hum details form kr skte the but hume kuch chizo ki valid information pta nhi chalegi that's why we use obj

//  const arr =['arpit',340,"Male",20]; // here we are unable to find wht type of information is store in arr for some value like 340 ,20 

//  console.log(arr);

// To access the any particular key and value


// console.log(obj.gender); // gender yaha pe as String hi hai jo backend me store hoga 


// console.log(obj.age);// similarly yaha pe age bhi string hi hai

// console.log(obj.account_balance);

// // overall yaha pe obj ke andr sabhi define key String hi hai..jisko hum another way me access kar skte hai


// console.log(obj["gender"]);// another way to access the key and it's value aur yaha pe hume as string show krna hoga tabhi access kr skte hai using double bracess

// to acces the account number we use sqaure bracket

// console.log(obj["account number"]);

// console.log(obj["0"]); // bina double brcket ke bhi access kr skte hai

// console.log(obj[0]); // here we accessed it without using double bracket
// console.log(obj);
// console.log(obj[1]);
// console.log(obj[2]); // without double bracket we acces the the key value

// const arr1 =[20,30,40];

// internal implementation of array in backend is like obj
// let arr={
//         0:20,
//         1:30,
//         2: 40,
//       length:3
//
//         }
// console.log(arr1[0] ,obj[0]); // similar print kar rha hai

// console.log( arr.length , obj.name);
 // dono access krne ka way same hai isiliye hum array ko as type object bolte hai

// we have noticed here ki humne yaha pe .length ke baad parenthesis use nhi kiya hai,since woo kuch alag function me use hote hai array ke..


const obj ={
    0:50,
    1:40,
    2:30,
    name:'arpit',
    account_balance:340, 
    gender:"Male",
    age:20,
    undefined :30,
    null:"heer",
}

console.log(obj.undefined);
console.log(obj["undefined"]);
console.log(obj[undefined]);
console.log(obj.null);

// above are three way to access the element in object
// before defining obj , if we try to print the obj then it will give error

// DIFFERENT WAY TO CREATE OBJECT // generally use nhi hota , bass knowledge keliye hai

const person = new Object();

// property add

person.name ="Arpit";
person.age =80;
person.gender ="Male";
console.log(person);

// Delete
delete person.age;
console.log(person);

// Modify or Update

person.name="Heeriye";
console.log(person);


 // THIRD WAY TO CREATE THE OBJECT USING CLASS

class people{
    constructor( name,age,gender){
           this.name=name; // here this calling the per1
           this.age=age;
           this.gender=gender;
    }
}

// with the help of class we can easly get the similar data for the different people
let per1 =new people("Arpit",20,"Male"); // here new is actually constructor which call the class under define constructor

let per2 =new people("Ranjan",21,"Female");
let per3 = new people("BUBU",60,"Female");
console.log(per1, per2,per3);


// COMMON METHOD FOR OBJECTS

// 1) object.key()
// 2) object.values()
// 3) object.entries()
// 4) object.assign():copies properties from one or more source objects to a target object.

let obj1 ={
    name:"arpit",
    age:20,
    account_balance:420,
    gender:"male"
};

const arr= Object.keys(obj1);// sirf keys ko access krne keliye we use this obj.key() method
console.log(arr);
const arr1=Object.values(obj1); // to access only values of obj 
console.log(arr1);

const arr2=Object.entries(obj1); // key and values dono access krne keliye we use this one entries method to access the key and values
// entries are rarely used
console.log(arr2);

// Assign use case too much important

const obj3 ={a:1,b:2};
const obj4 ={c:3,d:4};

const obj5= Object.assign({},obj3,obj4);
console.log(obj5,obj3);



































