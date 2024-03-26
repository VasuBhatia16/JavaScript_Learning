class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username); // similar to .call(this,username);
        this.email = email;
        this.passsword = password;
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const user1 = new Teacher("TeachEr","teacher@er.com","123")
user1.addCourse();

const user2 = new User("TeaCher");
user2.logMe();
// user2.addCourse();

console.log(user1 === user2);
console.log(user1 instanceof Teacher);
console.log(user2 instanceof Teacher);
console.log(user1 instanceof User);
console.log(user2 instanceof User);

