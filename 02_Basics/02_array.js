const onePiece = ["Luffy","Zoro","Sanji"];
const Naruto = ["Naruto","Sasuke","Minato"];
// onePiece.push(Naruto);
// console.log(onePiece); // Problem is Array is inside array as an element
// console.log(onePiece[3][1]);

const newArr = onePiece.concat(Naruto); // Works only when returned
console.log(newArr); //[ 'Luffy', 'Zoro', 'Sanji', 'Naruto', 'Sasuke', 'Minato' ]
//Another Way

const newArr1 = [...onePiece,...Naruto]//Spread operator ..., works like breaking of a Glass 

console.log(newArr1);

const arr1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const arr2 = arr1.flat(Infinity  /*Depth to check*/);
console.log(arr2);

console.log(Array.isArray("Vasu Bhatia")); //Checks if array
console.log(Array.from("Vasu Bhatia"));//Converts if not array
console.log(Array.from({name:"Vasu Bhatia"}));//Unable to convert  So returns an empty array// Important
let s1 = "la1"
let s2 = "la2"
let s3 = "la3"
console.log(Array.of(s1,s2,s3));//[ 'la1', 'la2', 'la3' ]

