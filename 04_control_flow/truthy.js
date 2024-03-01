const userEmail = [];

if(userEmail){
    console.log(`got user email`);
}
else{
    console.log(`No user email`);
}

//falsy values
// false, 0 , -0 , BigInt 0n , "", null , undefined, NaN

//EVERYTHING ELSE IS A TRUTHY VALUE

//truthy values
// "0" , 'false' , " " , [] , {} ,  function(){}

if(userEmail.length){
    console.log(`This is how we check`);
}
else{
    console.log(`Array is empty`);
}


const emptyObj = {}

if(!Object.keys(emptyObj).length){
    console.log(`Object is empty`);
}


// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10; // 5
val1 = null ?? 10; // 10
val1 = undefined ?? 15; //15
val1 = null ?? 10 ?? 15;

console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log(`less than 80`) : console.log(`more than 80`);;