// The Promise `object` represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
console.log('-----------PROMISE 1-----------');
const promise1 = new Promise(function(resolve,reject){
    // Do an async task
    //DB Calls, cryptography, network calls
    setTimeout(() => {
        console.log('Async task is complete');
    }, 0);
    resolve(); // Promise is connected to then after this resolve call
})
//Consumption of the promise
promise1.then(()=>{
    console.log('Promise consumed');
}) // .then() is directly related to resolve 


// Another Method
new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('-----------PROMISE 2-----------');
        console.log('Async task 2');
        resolve()
    }, 50);
}).then(()=>{
    console.log('Async 2 resolved');
})

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('-----------PROMISE 3-----------');
        resolve({username: "Vasu", email:"vasubhatia@dldavppcbsei.com"}) //We can pass data into the resolve function to work with it into the then function when promise is consumed
    }, 100);
})

promise3.then((user)=>{
    console.log(user);
})

const promise4 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('-----------PROMISE 4-----------');
        let error = false;
        if (!error){ //If error is not there
            resolve({username: "Vasu Bhatia",password:"123"});
        }
        else{
            reject(`ERROR: Something went wrong`)
        }
    }, 150);
})
promise4
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch((err)=>{
    console.log(`Error is: ${err}`);
})
.finally(()=> console.log('The promise is either resolved or rejected')) //Finally always get executed
// When something is returned by a then statement then it is an argument for the next then statement

const promise5 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('-----------PROMISE 5-----------');
        let error = true;
        if (!error){ //If error is not there
            resolve({username: "JavaScript",password:"123"});
        }
        else{
            reject(`ERROR: JS went wrong`)
        }
    }, 200);
})

async function consumePromise5(){
    try{

        const response = await promise5;
        console.log(response);
    } catch(err){
        console.log(err);
    }
}
consumePromise5(); //There is no catch block of async function. We have too write a catch block for the same

`https://jsonplaceholder.typicode.com/users`

// async function getAllUsers(){
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
//         const data = await response.json(); //await this as this also takes time
//         console.log(data);
//     } catch (err){    //         console.log(`ERROR: ${err}`);
//     }    
// }    
// getAllUsers()        
// Writing same function in syntax of .then().catch().finally()    
fetch(`https://api.github.com/users/vasubhatia16`)
.then((response)=>{
    console.log('-----------PROMISE 6-----------');
    return response.json();
})
.then((data)=>console.log(data))
.catch((error)=> console.log(error))
