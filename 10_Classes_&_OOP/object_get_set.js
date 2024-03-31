const User = {
    _email: 'lol@lol.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value
    }
}

const user3 = Object.create(User)

console.log(user3.email);