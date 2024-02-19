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

// console.log(`Inner a: ${a}`);
}



console.log(a);
// console.log(b);
// console.log(c);



//Note: Global scope is different in windows and node environment


//Closure 

function one(){
    const username = "Vasu"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //Error as one can't access two's website
    two();
}
// one()

if(true){
    const username = "Vasu"
    if (username === "Vasu"){
        const website = " youtube"
        // console.log(username+website); // No error
    }
    // console.log(website); //Error
}

// console.log(username); //Error




// Interesting Example

console.log(addOne(5)); //No error
function addOne(num){
    return num+1;

} //Basic function

//Hoisting: How a function is declared

addTwo(5); //Error is there as it is a declaration by variable 
const addTwo = function(num){ //Also called an expression
    return num+2;
}
