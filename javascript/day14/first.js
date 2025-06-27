// let obj ={};   // since object abhi empty hai isliye kuch print nhi hoga console me

// obj.name="Arpit";   // yaha print hue key with it's value // jab bhi hum yaha pe key value pair bnate hai too writeablee . enumerable and configurable by default aa jati hai 

// yaha pe obj ke pass key value alwa writable ,enumerable and configurable properties hoti hai

// console.log(obj); // print krne pe empty aa rhi hai

// console.log(Object.getOwnPropertyDescriptor(obj,'name'));
// obj.name ="Heer"
// obj.age= 20

// yaha pe humne dekha ki writable ,enumerable and configurable likha hua nhi tha yet we get it at output
 
// writable = false agar ata hai too , key-value ko mai change nhi kar skta hu
// while jab writable true ho output me too , we can change the key values if we want to update or change the code

// agar configurable = true ,, hai too we can change the writable and enumerable in output 

/// if configurable = false hai too , writable and enumerable to change nhi kr skta hu mai

// let  ={};

// Object.defineProperty(obj ,'name',{  // yaha pe humne define property likh hai , which means hum yaha pe obj ki props ko define kr rhe hai
//     value:"arpit",
//     writable:true,  // jaise humne custom writable me false likha obj ko agr humne change krna chcha to change nhi hua, we can see in output while running the code , true krte hi change ho jaega
//     enumerable:true,
//     configurable:false, // agar mai configurable flase krdu too , writable and enumerable ki value ko change nhi kr skta hu ,,,
// }) 

// if we will try to change the things again by defining an object like writable , enumerable then we can't do it becoz , once the configurable is false then w can't chnage the the obj key value again  like define below

// Object.defineProperty(obj,"name",{   // dubara define krne ke baad bhi writable chang nhi hua , kyuki congfigurable already flase the hogy tha
//     writable:true,
// })

// obj.name="Heer";

// console.log(obj);
  


// yaha pe humne niche dekha about ki account_number change nhi ho skta hai , uske liye humne writebale ko false kr diya hai


// const obj1={
//     name:"arpit",
//     age:20,
//     account_number:20001    // mai chahatu hu ki mera account number koe change nhi kr sake , so we will do some stuff , given below... 
// };

// // yaha pe writable by default true hota hai, so we will make it false so that account_number change na kr ske koe

// Object.defineProperty(obj1,'account_number',{
//     writable:false     // yaha humne writable false kr diya hai  ,as a result of which we cant change the account_number
// })

// obj1.account_number=20001;
// console.log(obj1.account_number);
 
 
//  

// const customer={
//     name:"Heer",
//     age:22,
//     account_number:123,
//     balance:2000,
// }

// name , account_num , change nhi honi chye

// Object.defineProperty(customer,"name",{
//     writable:false,
// })

// customer.name="arpit";
// // customer.account_number=10001;
// console.log(customer);


// Concept of enumerable see below

  // customer ki bhi koe properties inherit hue hogi , woo object.prototype se inherit hoti hai

//   to agar object.prototype se inherit ho rhi hai props then kyu nhi print ho rhi hai other props , kyuki unhki emnumerable false hogi that's why
const customer={
    name:"Heer",
    age:22,
    account_number:123,
    balance:2000,
}
 
 let customer2=Object.create(customer);  // inheritance
 customer2.city="haridwar"; 
 customer2.place="Delhi";

Object.defineProperty(customer,"name",{   // humne name ke enumerable ko false krdiya hai , isiliye uski key value print nhi hogi
    enumerable:false, 
})


//enumerable: jis bhi key ka enumerable true hoga , unn sab ka access hoga aur uska key print hoga

// even the inherit props and key comes if it's enumerable is true , then also , their key will be printed

Object.defineProperty(Object.prototype,'toString',{
    enumerable:true,
 })


for(let key in customer)   // yaha pe jiski bhi enumerable true hongi usi ki keys print hogi jo inherit hokar aae hai aur jo khudki assign hue hai

    console.log(key);


//  console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));      // enumerable false aaega isiiliye print nhi hota hai


 // agar hum toString wale ko bhi print karwna chchate hai to , hume uske enumerable ko true krna hoga with the help of defineProperty

// For in loop actually enumerable true hone pe , uski keys ko print krega while false hone pe uski key ko print nhi krega