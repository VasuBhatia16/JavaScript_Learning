const accId = 14575;
let accName = "Vasu Bhatia"
var accState = "Delhi"
accountEmail = "vasu@gmail.com"

let accPhone; //Gives an undefined as value

// accId = 4 // This is not allowed
accName = "Bhatia Vasu"
accState = "New Delhi"
accountEmail = "Vasu@bhatia.com"

//Don't use var keyword due to scope related issues in it
//It is Deprecated from js
console.table([accId,accName,accState,accountEmail,accPhone])  