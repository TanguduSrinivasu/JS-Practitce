// console.log('Hello from main.js')

// let sum
// sum = 25
// console.log(sum)

// const age = undefined
// console.log(age)

// let no = null
// no = 7
// console.log(no)
// console.log(typeof(no))

// const person = 
// {
//     name : 'Srinu',
//     qualification : 'B.Tech',
//     age : 22
// }
// person.age = 23
// console.log(person)
// console.log(person.age)

// const odd = [1,3,5,7,9]
// console.log(odd[1])
// console.log(odd)
// console.log(typeof('2' - '3'))
// console.log('5' - true)
// console.log(Boolean(NaN))
// console.log(typeof('10' - '9'))

function x()
{
    console.log(z);
}

const z = 1
x()


function y()
{
    const z = 1
    
}
y()
console.log(z);


const person =
{
    name : 'Srinu',
    sayName : function(){
        console.log(`My name is ${this.name}`)
    }
}

person.sayName();

function sayName(){
    console.log(`My name is ${this.name}`)
}

sayName.call(person);

function Name(name){
    this.name = name;
} 
const p1 = new Name('Hi')
const p2 = new Name('Hello')
console.log(p1.name,p2.name)

const str = 'hello';
for(chr of str){
    console.log(chr)
} 










