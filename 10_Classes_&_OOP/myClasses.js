// ES6

class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }

    capitaliseUsername(username){
        return `${this.username.toUpperCase()}`
    }
}


const user1 = new User("Vasu","Vasu@gmail.com","123");
console.log(user1);
console.log(user1.encryptPassword());
console.log(user1.capitaliseUsername());


// Behind the scene

function UserProto(username,email,password){
    this.username = username;
        this.email = email;
        this.password = password;
}

UserProto.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

UserProto.prototype.capitaliseUsername = function(username){
    return `${this.username.toUpperCase()}`
}

const user2 = new UserProto("Vasu","Vasu@gmail.com","123");
console.log(user2);
console.log(user2.encryptPassword());
console.log(user2.capitaliseUsername());