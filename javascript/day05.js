// MEMORY  management dicussion is done here

let a=10;
let b=a;// primitive datatype ke andar koe change nhi aa rha hai,since hum yaha b ki value change krne ki kosis kr rhe hai, too hua nhi 
b=20;
console.log(b);
console.log(a);
// primitive datatype vs non primitive datatype
// primitive datatype : Immutable( means simply cant be changed)
// non primitive datatype:Mutable (means simply can be changed)

let obj1={
    id:20,
    naming:"rohit"
}

let obj2=obj1;
obj2.id=30;//  object ek non primitive datatype hai, too jaise hi humne obj2 ki value chnge ki id wali too usme then jo obj1 ke equal thi then obj2 me change ke krn obj1 me aasign id chnge hogyi
console.log(obj1);
console.log(obj2);