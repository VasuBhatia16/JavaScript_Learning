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


//Part - 2

// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(2));// Fixed number 

//But when we dont have total count of values then what to do

// function calculateCartPrice(...num1){ 
//     return num1 // ... rest operator
// }
// console.log(calculateCartPrice(2,3 ,4 ,5 ,6));//Returns array of numbers
function calculateCartPrice(val1,val2,...num1){ 
    return num1 // ... rest operator
}
console.log(calculateCartPrice(2,3 ,4 ,5 ,6));//Takes value after first 2 numbers'

const user = {
    username: "Vasu",
    price:199
}

function handleObject(anyObject){
    console.log(`Username ${anyObject.username} price:${anyObject.price}`);
}

handleObject(user)

handleObject({
    username: "Vasu Bhatia",
    price:198
})


const myNewArray = [200,300,400,500]

function returnSecondValue(arr){
    console.log(`Second Value:  ${arr[1]}`);
}
returnSecondValue(myNewArray);

returnSecondValue([3,5,7,8,9]);

