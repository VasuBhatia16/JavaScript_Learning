//Primitive datatype and non - primitive


//1. primitive 
//      -> 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

//2. Non - Primitive (Reference Type)
//      -> 3 Types: Array, Objects, Functions


//JavaScript => Dynamically Typed Language


//Symbols
const id = Symbol('123')
const aid = Symbol('123')
console.log(aid == id);     //false
console.log(aid === id);      //false
//BigInt
const bigNumber = 74185296385274178925525255153256525n
console.log(bigNumber); // to be represnted as integer and not of form e^x
//Array
const weebs = ["Luffy", "Naruto", "Eren"]; // Datatype = object
//Object
let myObj = {
    name: "Vasu",
    age:"22"
}
//Function
const myFunction = function(){
    console.log("Wello Horld");
} //Datatype = function but called as "object function"

console.log(typeof weebs); // object


// ------------------------------------------------------

//Stack Memory( Primitve) , Heap Memory(Non - Primtive)
let myName = "Vasu Bhatia";
let nameSecond = myName; //Vasu Bhatia
nameSecond = "Vasudev Bhatia"
console.log(nameSecond); // Vasudev Bhatia
console.log(myName); //Vasu Bhatia


let user1 = {
    email: "vasubhatia@dldavppcbsei.com",
    upi: "7303117178@paytm"
}
let user2 = user1; //vasubhatia@dldavppcbsei.com
user2.email = "vasu.bhatia16@gmail.com";
console.log(user1); // vasu.bhatia16@gmail.com
console.log(user2); // vasu.bhatia16@gmail.com