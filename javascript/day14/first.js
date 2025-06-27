let obj ={}; // since object abhi empty hai isliye kuch print nhi hoga console me

obj.name="Arpit"; // yaha print hue key with it's value

// yaha pe obj ke pass key value alwa writable ,enumerable and configurable properties hoti hai

// console.log(obj); // print krne pe empty aa rhi hai

console.log(Object.getOwnPropertyDescriptor(obj,'name'));
obj.name ="Heer"

// yaha pe humne dekha ki writable ,enumerable and configurable likha hua nhi tha yet we get it at output
 
// writable = false agar ata hai too , value ko mai change nhi kar skta hu