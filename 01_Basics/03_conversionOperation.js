/* let score = 33;
console.log(typeof score);
console.log(score);

let score1 = "33"
console.log(typeof score1);
console.log(typeof (Number(score1)));
console.log((Number(score1)));

let score2 = "33abcjcb"
console.log(typeof score2);
console.log(typeof (Number(score2)));
console.log((Number(score2))); //NaN => Not a Number// Datatype (NaN) => number

let score3 = null
console.log(typeof score3);
console.log(typeof (Number(score3)));
console.log((Number(score3))); //0

let score4 = undefined
console.log(typeof score4);
console.log(typeof (Number(score4)));
console.log((Number(score4))); //NaN

let isLoggedIn = NaN
let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn)

// anything other than 0 is true for numbers
//anything other than empty string is true for strings
// null=>false
// undefined =>false
// NaN =>false


let n;
let i = String(n);
console.log(i);
console.log(typeof i);

//converts everything to string as it is

 */
// OPERATIONS
let value = 3
let negValue = -value
console.log(negValue);
let str1="hello";
let str2=" vasu";
let str3=str1+str2;
console.log(str3);
console.log("1"+2);//12
console.log(1+"2");//12
console.log(1+"2"+2);//122
console.log(1+2+"2");//32 = 1+2  concat 2 = 3 concat 2 = 32
console.log(3+4*5%3);

console.log(true);//true
console.log(+true);//1
console.log(+"");//0
let num1,num2,num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1);//4
console.log(num2);//4
console.log(num3);//4

let count = 100;
++count;
console.log(count);
count++;
console.log(count);
