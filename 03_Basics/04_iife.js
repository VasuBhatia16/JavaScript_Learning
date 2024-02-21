//Immediately invoked Function Expression (IIFE)

// function chai() {
//     console.log("Db connected");
// }() //doent work
(function chai() {
    console.log("Db connected");
})(); //IIFE //Named IIFE

//Semi-colon is compulsory

//IIFE is used to avoid the pollution done by the global scope


//  Another method

((name)=>{
    console.log(`DB connected ${name}`);
})("Vasu"); //Unnamed iife
