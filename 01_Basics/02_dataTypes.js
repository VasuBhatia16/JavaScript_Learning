"use strict"; //Types all js in newer version of js

// alert(3 + 3) // We are in node.js env, this works in browser

console.log(3 + 
    3); //Works but code readability decreases
/* 
console.log("Va     
su"); 
Gives error when strings 
*/

//DATATYPES
let name1 ="Vasu";
let age=18
let response = true;
let state;


/* 
number => 2^53 range
bigInt => after number
string => "" / ''
boolean => true/false
null => standalone value //variable is not undefined but empty
undefined => when nothing is defined to a variable
symbol => unique


object
*/

console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof (typeof undefined)); //string
console.log(typeof name1);
console.log(typeof age);
console.log(typeof response);
console.log(typeof state);