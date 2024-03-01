// if
if( true){
    console.log(`Executes`);
}

if(false){
    console.log(`Doesnt execute`);
}

const isLoggedIn = true;
if(isLoggedIn){

}
if(2=="2"){
    console.log(`Executed`); 
}
if (2==="2"){
    console.log(`DDoent Execute`);
}
//  < , > , <= , >= , == , != , === , !==

// const temperature = 81;
// if (temperature<50){
//     console.log(`Temperature: Less than 50`);
// }
// else{
//     console.log(`Temperature: Greater than 50`);
// }

// const score = 200
// if(score>100){
//     const power = "Fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);

// var always has global scope so dont use var

const balance = 1000;
// if (balance > 500) console.log(`test`),console.log(`test2`); //Implicit Scope // Dont do like this

// if (balance <500){
//     console.log(`Less Than 500`);
// }
// else if(balance <750){
//     console.log(`Less Than 750`);
// }
// else if(balance<900){
//     console.log(`Less Than 900`);
// }
// else{
//     console.log(`Less Than 1200`);
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(userLoggedIn && debitCard && 2==3 ){
    console.log(`Allow to buy courses`);
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log(`User logged in`);

}

