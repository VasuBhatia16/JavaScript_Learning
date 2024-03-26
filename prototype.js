// let myName = 'Vasu     ';
// myName.truelength                                                                  
// console.log(myName.truelength);

let myHeros = ['thor','spidermna']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.vasu = function(){
    console.log(`Vasu is present in all objects`);
}

// heroPower.vasu()
myHeros.vasu();

Array.prototype.heyVasu = function(){
    console.log(`Vasu says hello`);
}

myHeros.heyVasu();
// heroPower.heyVasu(); //Error


const user = {
    name:'chai',
    email:'chai@tea.com'
}

const Teacher = {
    makeVideo:true
}

const teachingSupport = {
    isAvailable:false
}

const TAsupport = {
    makeAssignment: 'JS Assignment',
    fullTime:true,
    __proto__: teachingSupport
}

Teacher.__proto__ = user;


// Modern Syntax

Object.setPrototypeOf(TAsupport,Teacher);

let anotherUsername = "       Vasu Bhatia       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);

}
anotherUsername.trueLength();
" Vasu ".trueLength();
"iceTea".trueLength();
