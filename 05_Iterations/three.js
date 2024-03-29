// for of

// ["","",""]

// [{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greet = "Hello World!"
for (const greeting of greet) {
    console.log(`Each char: ${greeting}`);
}


// Maps

const map = new Map();
map.set('IN',"India")
map.set('US',"USA")
map.set('IN',"India")
console.log(map);
for (const key of map) {
    console.log(key); // array of each element 
}
for (const [key, value] of map) {
    console.log(key, `:- ${value}`); // individual values in variables 
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Pubg'
}

// for (const [key,value] of myObject) {
//     console.log(key, `:- ${value}`); //Error
// }

// Objects not iterable like this

