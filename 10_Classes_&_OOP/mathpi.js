const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

Math.PI = 5
console.log(Math.PI);
console.log(descriptor);

const chai = {
    name: 'ginger chai',
    price: 2500,
    isAvailable: true,

    orderChai: function(){
        console.log("Code fat gya");
    }
}


// console.log(Object.getOwnPropertyDescriptor(chai,'name')); 
Object.defineProperty(chai,'name',{
    // writable: false,
    enumerable:false,
    
})


// console.log(Object.getOwnPropertyDescriptor(chai,'name')); 

for ( let [key,value] of Object.entries(chai)){

    if(typeof value!== 'function'){
        console.log(`${key}: ${value}`);
    }
}