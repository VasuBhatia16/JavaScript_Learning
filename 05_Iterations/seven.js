const myNums = [1,2,3,4,5,6,7,8,9,10];
let newNums
//To add 10 in each number
newNums = myNums.map((num)=>num+10) //It also returns values
// newNums = myNums.map((num)=>{return num+10})

//Chaining

newNums = myNums
        .map((num)=>num*10)
        .map((num)=>num+1)
        .filter((num)=>num>40)


console.log(newNums);