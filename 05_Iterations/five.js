const coding = ["js","ruby","java","cpp","python"]

coding.forEach(function (i){
    // console.log(i);
} )

// console.log(coding);

coding.forEach((i)=>{
    // console.log(i);
})

function printMe(i){
    // console.log(i+i);
}

coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    // console.log(`Item: ${item}, Index: ${index}, Array: ${arr}`);
})


const myCoding=[
    {
        languageName: "Js",
        languageFileName: "BawaScript"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(`Language FileName: ${item.languageFileName} Language Name: ${item.languageName}`);
})

// [{},{},{},{}];