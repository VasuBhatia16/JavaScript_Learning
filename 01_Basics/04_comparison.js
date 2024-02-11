console.log("2">1); //true
console.log("02">1); //true 
console.log(null>0);//false
console.log(null==0);//false // as == doesnt convert null to 0 but > >= does convert it to 0 
console.log(null>=0);//true
console.log(+undefined); //NaN
//===  STRICT CHECK, CHECKS DATATYPE TOO
console.log("2" === 2); //false
console.log("2" == 2); //true