class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get password(){
        return `${this._password}hitesh`
    }
    
    // if u define either u have to defne the other

    // set password(value){
    //     this.password = value;
    // } // Maximum call stack size exceeded
    // Race between constructor and setter

    set password(value){
        this._password = value
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

}

const user1 = new User("xyz@abc.com","abc");

console.log(user1);
console.log(user1.password);
console.log(user1.email);