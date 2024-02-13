// Declaration => Literal or Constructor
//Literal => Not Singleton
//Constructor => Singleton


//LITERALS

const mySym = Symbol("key1");

const jsUser = {
    name: "Vasu",
    age: 19,
    [mySym]: "mykey1", //Symbol is always used like this
    location: "Delhi",
    email: "vasubhatia@dldavppcbsei.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
    "full-name": "Vasu Bhatia",

};
console.log(jsUser.email);
// console.log(jsUser[email]); //Error as it is converted to string
console.log(jsUser["email"]);

// console.log(jsUser."full-name");  // error as this is not allowed 
//So only one way is preffered i.e jsUser["full-name"]
console.log(jsUser["full-name"]);
// console.log(mySym);
// console.log(jsUser.mySym); //Not used as a symbol
console.log(jsUser[mySym]);//Now used as a symbol
// console.log(typeof jsUser[mySym]);

jsUser.email = "vasu.bhatia16@gmail.com"; //Change values
console.log(jsUser.email);
// Object.freeze(jsUser);
jsUser.email = "vasu.bhatia14@gmail.com"; // Doesn't change values now
console.log(jsUser.email);
console.log(jsUser);
jsUser.greeting = function(){
    console.log(`Hello , ${this.name}`);
}

console.log(jsUser.greeting); //[Function (anonymous)]  <= It is the reference of a function
console.log(jsUser.greeting()); // log command  + undefined

//`this` is used like c++,used to refer to members of object.
