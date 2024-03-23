const user = {
    username: "Vasu",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        console.log(`Got user details for ${this.username} from DB`);
        console.log(this);
    }

}

// console.log(user["username"]);
// user.getUserDetails();

// const promise1 = new Promise() // new is a constructor function
const date = new Date() // new makes a new context

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome: ${this.username}`);
    }
    return this //passing the object, Not compulsory to write
}

// const user1 = User("Vasu",15,true);
// const user2 = User("Javascript",20,false)// Overwrites the values
//Hence we have to use the new keyword
const user1 = new User("Vasu",15,true);

const user2 = new User("Javascript",20,false)
console.log(user1);
console.log(user2);

console.log(user1.constructor); //Reference to user

//New keyword => Empty instance/Object gets created => constructor function due to new keyword gets called =>arguments gets injected into the this keyword => returned 

