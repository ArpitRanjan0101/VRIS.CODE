const num:number=10;

interface Person{
    name:string,
    age:number,
    gender:string,
    aadhar?:number // kabhi kabhi aissa ho skta hai ki aadhar exist nhi karta hai then we make it optional, by just applying ? sign
}
const obj:Person={
    name:"arpit",
    age:20,
    gender:"Male",
   aadhar:1234  // agar aadahr ko humne optional ban diya hai too usse hata bhi denge to koe fark nhi padega..
}

// ? is known as optional keyword..

 
// utility Type for Objects
// 1. Partial<Person>
// 2.Required<Person>
// 3.Readonly<Person>



// Latest examples


interface customer{
    name:string,
    age:
}