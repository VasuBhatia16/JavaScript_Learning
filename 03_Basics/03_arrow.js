const user = {
    username: "Vasu",
    price: 999,
    welcomeMessage: function (){
        console.log(`${this.username}, welcome to the website`); //this is used for current context
        console.log(this); //prints the object
    }

}

// user.welcomeMessage();
// user.username= "Vasu Bhatia";
user.welcomeMessage();

console.log(this); //{}  this is always referencing to an empty object in node environment
/* 
Note: this in browser has a window object as its value
*/



// function chai(){
//     let username = "Vasu"
//     console.log(this); //Many values come together
//     console.log(this.username);//undefined
// }

// chai();


// const chai = function(){
//     let username = "Vasu"
//     console.log(this.username);//undefined
// }

const chai = () => {
    let username = "Vasu"
    console.log(this); //{}
    console.log(this.username);//undefined
}

// chai();



// const addTwo = (N1,N2) => {
//     return N1+N2;
// } //basic syntax for arrow function

// console.log(addTwo(5,7));

// const addTwo = (N1,N2) => N1+N2; //implicit return , no return keyword one line only

//Return is used when curly braces are used `{}`


const addTwo = (N1,N2) => ({username:"Vasu"});
console.log(addTwo(5,7));


const myArr = [2,5,6,4,2];
// myArr.forEach(function(){})
// myArr.forEach(()=>{})