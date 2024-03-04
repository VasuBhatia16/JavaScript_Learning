const myNums = [1,2,3];
let newNums;

// .reduce(callback fn, initial value)
newNums = myNums.reduce((acc,curval)=>acc+curval,0); //6

newNums = myNums.reduce(function (acc,curval){return acc+curval},3);//After ',' is initial value
console.log(newNums);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
let total = shoppingCart.reduce((sum,curobj)=>(sum + curobj.price),0);
console.log(total);
