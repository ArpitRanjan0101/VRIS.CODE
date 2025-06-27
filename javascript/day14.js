// ADVANCE LOOP

// we will study here , Writebable, enumerable , configurable .. just check out the DAY14 folder FIRST.JS



let obj={
    name:"Arpit",
    age:23,
    gender:"male",
    city:"hazaribagh"
};

// for in loop , here we can iterate over index that is keys

// for(let key in obj)
// {
//     console.log(key,obj[key]); // here we print the keys with its values by using  obj[key]
// }

// // Object.Keys(obj) yaha pe bhi hum iterate kr skte hai jo ki ek array return krega 

// console.log(Object.keys(obj)); // alert capital o lena hai object me

// we are making here object prototype , means we will make a another object , which will contain all the props of obj
// after making the prototype , we can add extra props in prototype obj

let obj2=Object.create(obj); // prototyping means we are creating here clone of obj , so that we can add extra features in it..
obj2.money= 420;
obj2.id="heer";
// console.log(obj2); // yaha pe hum obj2 print kar sakte hai

// console.log(obj2.name); // yaha pe hum obj ka props laa skte hai using obj2. 

for(let key in obj2)
{
    console.log(key);  // for in loop object and object2 dono ki props ko print krega..likin agar mai console.log(Object.keys(obj2)) use krta hu too sirf object2 ki value print hoti hai ,, this is the basic difference between for in and Object.keys(obj2) me
}

// simply for in loop inherit props ko bhi print krta hai..








 


