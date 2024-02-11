//Arrays
const myArr = [0,1,2,3,4,5] //[ element1, element2 ,....   ]
//elements can be of different types also
//Arrays are resizeable in js
//Can't be accessed through arbitrary strings
//array[0,1,2,3,4,5,6,....indexing starts from 0]
//Arrays make shallow copy and not a deep copy
//Shallow Copy: Same reference point are share in the copy
//Changes in array copy do change the original array
console.log(myArr[0]);
const weeb = ["Naruto","Luffy"]
const newWay = new Array(1,2,3,4);
console.log(newWay);

//Array Methods
// myArr.push(6)
// myArr.push(6)
// myArr.pop()
// myArr.unshift(9)//push from start
// myArr.shift()//pop from start
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

// console.log(newWay);
const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);

console.log("A ",myArr );

const myn1 = myArr.slice(1,3)

console.log(myn1);

console.log("B ",myArr);
const myn2 = myArr.splice(1,3)

console.log(myn2);

console.log("C ",myArr);