/* GLOBAL SCOPE */

let a = 100;
// const b = 20;
// var c = 300;

{} // Scope


if (true){
/*  BLOCK SCOPE */

let a = 10;     //Won't work outside
const b = 20;   //Won't work outside
// var c = 30;     //Works outside // This is a big problem //So we should avoid var

console.log(`Inner a: ${a}`);
}



console.log(a);
// console.log(b);
// console.log(c);



//Note: Global scope is different in windows and node environment