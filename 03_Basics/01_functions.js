function sayMyName() {
console.log("V");
console.log("A");
console.log("S");
console.log("U");
}


sayMyName // Reference of a function
sayMyName() //Calling or execution of a function

// function addTwoNumbers(n1,n2 ) // No type is given to parameters
// {
//     console.log(n1+n2);
// }

// addTwoNumbers(3,4)
// addTwoNumbers() //NaN
// addTwoNumbers(3,"4"); //34
// addTwoNumbers(3,"a"); 
// const res = addTwoNumbers(3,5);
// console.log(`Result: ${res}`); //UNDEFINED ASFUNCTION DOESN'T RETURN ANYTHING

function addTwoNumbers(n1,n2 )
{
    // let res = n1+n2;
    // return res
    return n1+n2
    console.log(n1+n2); // Unreachable code
}

const res = addTwoNumbers(3,5);
console.log(`Result: ${res}`);


function loginUserMessage(username = "Lol"){
    // if(username === undefined){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return  `${username} just logged in`
}

loginUserMessage("Vasu"); // No print statement no output
console.log(loginUserMessage("Vasu"));
console.log(loginUserMessage(""));
console.log(loginUserMessage()); //undefined just logged in
