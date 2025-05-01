//  const arr =[2,35,5,7,8,"arpit",true,8];
//  console.log(arr);

//  //LENGTH :WHICH TELL US HOW MANY ELEMENT ARE THERE IN ARRAY
//  //length: Returns the number of elements in the array.
//  console.log(arr.length);
//  console.log(arr[4]);// zero based indexing hoga
//  // At use is latest, negative index bhi le leta hai
//  console.log(arr.at(3));// AT is generally used to print any individual element by accesing that element's index , we can take negative index in case of AT
//  console.log(arr.at(-2));

//  const newarr = arr;
//  console.log(newarr==arr);// newarr and arr ka reference same hoga isiliye equal hai
 
//  // mai chahata hu ki newarr apna alag se print kre
//  // uske liye hum StructuredClone ka use krte hai

//  // structureClone
//  const Newbiearr = structuredClone(arr);
//  console.log(Newbiearr==arr);// output is false
//  // structredClone help us to create clone of that already present arr


//  //PUSH: push just add the element at the end of the array
//  arr.push(40);
//  arr.push(50);
//  console.log(arr);

//  // POP : it just remove the element at the end of the array
//  arr.pop();
//  arr.pop();
//  console.log(arr);


//  // unshift : add element at starting of an array with creating new space
//  arr.unshift(10);
//  arr.unshift(30);
//  console.log(arr); 

// // shift : delete element from the first of an array and uss element ki space bhi khali ho jaa rhi thi
// arr.shift();
// arr.shift();
// console.log(arr);

// // delete operation : delete operation delete the element of that index which we have provide but the space of that element remain there
// // delete arr[0];
// // console.log(arr);

// // Indexof: indexof tells us the index of the element , mtlb ki agar array me doo same element present hai too woo phele wale element ko show krega , naki last wale ko
// console.log(arr);
// console.log(arr.indexOf(8));// output is 4

// // Lastindexof : return the index of the last element

// // if we want last same element index then we just use lastindexof
// console.log(arr.lastIndexOf(8));


// // Include: give the return whether the number is included or not in an array , and output is given in true or false
// console.log(arr.includes(1));// koe number included hai ya nhi hai wahi batata hai include..result true ya false me deta hai 

// // Slice : slice mean jut to cut down,mtlb ki kisi ek index , last range index tak select krke isse array me print karwana..but jo last me index include hoga range jiise bolte hai usse nhi lete hai , usse just phele wala lete hai

// // slice ka use krne se original array me koe changes dekhne ko milti hai

// console.log(arr);
// console.log(arr.slice(2,4));// yaha range me jo 4 included hai usse nhi lena hai , usse phele wale tak lena hai


// // Splice : jaise hi splice ka use krte hai , waise hi original array me changes dekhne ko milti hai,,aur yaha pe jab splice function declare krte hai too like (2,5),, then eska simple meaning hai ki index 2 se suru kro aur uske aage 5 element tak print kro..

// // splice ko multiple time revise kro, kyuki interview bhut barr puch lete hai 
// console.log(arr);
// console.log(arr.splice(2,5));
// console.log(arr);// this is the updated array after applying the splice function

// // splice ke majedar concept hai bhai achse kro
// // ek aur yaha pe mujhe concept mila hai splice ka 
// // like splice(starting_index,total_element_delete,add value)
// // agar hum total_element_delete ke baad koe element add kr rhe hai too woo given starting index ke baad add ho jaega jitne element diye hai woo sab add  ho jaega woo bhi updated arry me add hot hai

// arr.splice(2,3,"money",90);
// console.log(arr);// updated array me add hota hai

// // Array ko agar string me convert krna hai too,, we use toString

// console.log(arr.toString());
// console.log(typeof arr.toString());
// console.log(arr.join("*"));// join ka basically work hai , bich me kuch add krna aur join  bhi string me convert kr deta hai ,like comma ke badle ....

// Concat(): just to add all the element

let arr1=[2,3,4,56,6];
let arr2=[5,9,34,78,12];
let arr3=[23,45,65,76];
let arr4=[245,675,776,778];
// let arr5= arr1.concat(arr2,arr2,arr3,arr4);
// console.log(arr5);

// second way to add the array ,just use the push operation....
// 2d array ke form me convert ho chuka hai
arr1.push(arr4);
console.log(arr1);// it form the 2d arrya here when we use concat() function
console.log(arr1[1]);// it will print the output of index 1 of new 2d array
console.log(arr1[5]);
console.log(arr1[5][0]);// it will print the zeroth index element which is present at new 2d array

// 2D ARRAY FORMATION BELOW

let arr2d=[[1,2,3],[4,5,6],[7,8,9]];// all inner respective square barcket are respective elment of 2d array
console.log(arr2d);
console.log(arr2d[0]);
console.log(arr2d[0][1]);

// 3D Array
 let arr5 =[[1,2,[4,5]],[6,7,8]];
 console.log(arr5[0][2][0]);// with we access the 4 element

 // Converting the 2d array into the 1d array using flat operator

 let arr2dd=[[1,2,3],[4,5,6],[7,8,9]];
 let newarr2dd= arr2dd.flat();
 console.log(newarr2dd);
// Kitne bhi size ka array hoga, flat(infinity) usse 1d array me convert kar dega
// flat()=operator
 let arr4d=[[1,2,3],[57,78,66,77,[11,0,89,[25,34]]],[4,5,6],[45,34,22],[7,8,9]];
 let Newarr =arr4d.flat(Infinity);
 console.log(Newarr);

 // Array constructor use to check from the backend that whether the given input is array or not
 let abc =[1,2,34,45];
 console.log(Array.isArray(abc));// output is true , thus it is a array

 // New way to create the array but it is not the recomended method to create the array , just for the knowledge
 let ac =new Array(2,333,123,432);
 console.log(ac);









  
  