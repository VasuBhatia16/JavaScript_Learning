const name = "Vasu Bhatia";
const repoCount = 50;
// console.log(name+repoCount+" Value");

console.log(`Hello my name is ${name} and repo count: ${repoCount}`);
const gameName = new String('Vasu Bhatia');
// console.log(gameName[0]);
console.log(gameName.__proto__); //Best is to see in console
console.log(gameName.length);
console.log(gameName.toUpperCase);//[Function: toUpperCase]
console.log(gameName.toUpperCase()); //VASU BHATIA

console.log(gameName.charAt(9)); // i //position
console.log(gameName.indexOf(`t`)); //8

const newStr = gameName.substring(0,4); //Vasu //non-negaive
console.log(newStr);

const sliceStr = gameName.slice(-8,7);//u Bh //negative
console.log(sliceStr);

const trimStr = "     Vasu       ";
console.log(trimStr);
console.log(trimStr.trim()); //Start + End //only works on " " and \n


const replaceStr = "https://vasu.com/vasu%20bhatia";
console.log(replaceStr.replace('%20','-')); //https://vasu.com/vasu-bhatia

console.log(replaceStr.includes('vasu'));//true
console.log(replaceStr.includes('Vasu'));//false

const splitStr = "Vasu -Bhatia- Lol";
console.log(splitStr.split()); //arrays first element will be string then
console.log(splitStr.split('-'));//3 elements
console.log(splitStr.split('-',2));//2 elements then break

