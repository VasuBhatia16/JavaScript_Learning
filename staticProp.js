class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }

    static createId(){
        return `123`
    } //Doesn't give access to any instance of a class

}

class Teacher extends User{
    constructor(username, email){
        this.email= email;
        super(username);
    }

}


const user1 = new User('Vasu');
// console.log(user1.createId())
const user2 = new Teacher('Iphone','iphone@c.om');
console.log(user2.createId());