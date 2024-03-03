// for (const [key,value] of myObject) {
//     console.log(key, `:- ${value}`); //Error
// }

const myObj = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'ruby'
}

// for in loop

for (const key in myObj) {
    // console.log(key); //print keys only

    // console.log(myObj[key]);// To print values
}


const programming = ["js","ruby","python"]
for (const key in programming) {
    // console.log(`${key}`); // Print indexes of the array
    // console.log(programming[key]); // To print values
}

const map = new Map();
map.set('IN',"India")
map.set('US',"USA")
map.set('IN',"India")
for (const key in map) {
    console.log(key);
}