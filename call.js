function setUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username,email,password){
    // setUsername(username); // doesn't call
    // setUsername.call(username); // same as above
    setUsername.call(this, username);

    this.email = email;
    this.password = password;
}


const user = new createUser("VASU", "vasu@vasu.com","123");
console.log(user);