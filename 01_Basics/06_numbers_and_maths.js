const score = 400;
const bal = new Number(100);
console.log(bal);
console.log(score);
// console.log(bal.toString().length) ; // 3
// console.log(bal.toFixed(2)); //100.00
const num=83.2966;
console.log(num.toPrecision(3)); // returns a string
//only first three values are precise here
const hundreds = 100000000;
console.log(hundreds.toLocaleString());
console.log(Number.MAX_VALUE);
//
// -----------------Maths--------------
console.log(Math); //Object [Math] {}
// see from console
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.trunc(4.6852));
console.log(Math.random());
console.log(Math.trunc((Math.random()*10)) + 1);
const min= 10;
const max = 20;
console.log(Math.trunc(Math.random()*(max-min+1) + min));