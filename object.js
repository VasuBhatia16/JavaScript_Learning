function square(num){
    return num*num;
}

square.power = 3;
console.log(square(4));
console.log(square.power);
console.log(square.prototype);


function createUser(username,score){
    this.username = username;
    this.score = score;
    return score;

}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
}
const java = new createUser('java',100);
const script = new createUser('script',200);
java.increment(); // Error without new
console.log(java);
console.log(script);
java.printMe();
script.printMe();


/* 

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.


*/