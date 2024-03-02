// For Loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        // console.log("5 is best number");
    }
    // console.log(element);
}

// console.log(element); // Scope Error


for (let i = 1; i <+ 10; i++) {
    // console.log(`Outer loop: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop: ${j} and Inner Loop: ${i}`);
        // console.log(`${i}*${j} = ${i*j}`);
    }
}

const myArray = ["Naruto","Eren","Tanjiro"];
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

// break and continue

// for (let i = 0; i <= 20; i++) {
//     if (i == 5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is: ${i}`);
// }


for (let i = 0; i <= 20; i++) {
    if (i == 5){
        console.log(`Detected 5`);
        continue; // Ignore one iteration
        //Skips one iteration
    }
    console.log(`Value of i is: ${i}`);
}