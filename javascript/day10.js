// Hoow to create object
// store the value in key value pair
const obj ={
      0:50,
      1:40,
      2:30,
      name:'arpit',
      account_balance:340, // key me agr hum kuch likh rhe hai too waha pe space nhi d skte hai like account number,,,but uske place pe hume string ke form me declare kr skte hai like "account number" tab phir hum access kr skte hai
      gender:"Male",
      age:20
    //   "account number":23021605
}
console.log(obj);
console.log(typeof obj);// output=obj
// array ka bhi use krke hum details form kr skte the but hume kuch chizo ki valid information pta nhi chalegi that's why we use obj
 const arr =['arpit',340,"Male",20]; // here we are unable to find wht type of information is store in arr for some value like 340 ,20 
 console.log(arr);

// To access the any particular key and value
console.log(obj.gender); // gender yaha pe as String hi hai jo backend me store hoga 
console.log(obj.age);// similarly yaha pe age bhi string hi hai
console.log(obj.account_balance);

// overall yaha pe obj ke andr sabhi define key String hi hai..jisko hum another way me access kar skte hai
console.log(obj["gender"]);// another way to access the key and it's value aur yaha pe hume as string show krna hoga tabhi access kr skte hai using double bracess

// to acces the account number we use sqaure bracket
// console.log(obj["account number"]);

console.log(obj["0"]); // bina double brcket ke bhi access kr skte hai
console.log(obj[0]); // here we accessed it without using double bracket
console.log(obj);
console.log(obj[1]);
console.log(obj[2]); // without double bracket we acces the the key value
































