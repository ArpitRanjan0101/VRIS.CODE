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


