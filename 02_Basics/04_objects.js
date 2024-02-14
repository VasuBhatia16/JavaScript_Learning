//Part - 2 => Objects

//Objects with constructor  => Singleton

// const tinderUser = new Object()   === {} //Empty object
const tinderUser = {}
tinderUser.id="121344";
tinderUser.name="javaScript"
tinderUser.isLoggedIn = false;

const regularUser = {
    email:"name@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Vasu",
            lastname:"Bhatia"
        }
    }
}

const obj1 = {
    1:"a",2:"b"
}
const obj2 = {
    3:"a",4:"b"
}
let obj3 = Object.assign({}, obj1,obj2); //first parameter = {} (target) If not given then target will be obj1 
obj3 = {...obj1,...obj2}
// const obj3  = {obj1,obj2}//Nested Array gets created
console.log(obj3);
console.log(regularUser.fullname.userfullname.firstname);  
console.log(tinderUser);


const users = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:2,
        email: "g@gmail.com"
    },
    {
        id:2,
        email: "f@gmail.com"
    }
] //Array of objects

console.log(users[1]["id"]);

console.log(Object.keys(tinderUser)); //Array of keys
console.log(Object.values(tinderUser)); //Array of values
console.log(Object.entries(tinderUser));//Array of array of each key value pair

console.log(tinderUser.hasOwnProperty('isLogged'));//False
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//True


//Part - 3

const course = {
    courseName:"javaScipt",
    price:"999",
    courseInstructor:"hitesh"
}

// course.courseInstructor   Lengthy process

const {courseInstructor: instructor} = course;

// console.log(courseInstructor);// const {courseInstructor} = course;
console.log(instructor);

// const navbar = ({company}) => {

// }

// navbar(company = "Vasu Bhatia")

// API === {       //json object without a name
//     "name":"Vasu Bhatia",
//     "age":"19"
// }

// [
//     {},
//     {},
//     {}
// ]



//randomuser.me/api
