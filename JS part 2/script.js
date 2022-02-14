// The callback function
function morning () {
console.log(`Good morning Bob`);
return `Good morning Bob`;
}
// The higher order function 
function greet(name, cb) {
const myName = 'john';
console.log(`${name}, my name is ${myName}`);
cb();
}

greet('bobo', morning);
greet('peter', morning);

// Array methods

// forEach

const people = [
    {name : 'bob', age: '20', position : 'developer', salary : 100},
    {name : 'peter', age: '25', position : 'designer',salary : 200},
    {name : 'suzy', age: '30', position : 'manager',salary : 300},
]

function showPerson(person){
    console.log(person.position);
}
people.forEach(showPerson)

// map
const ages = people.map(function (person){
    return person.age;
})
console.log(ages);

// filter

const young = people.filter(function(person){
    return person.age >= 25;
});
console.log(young);

// find

const person = people.find(function(person){
    return person.position ===  'developer';
})
console.log(person);

// reduce

const total = people.reduce(function(acc, crtItem){
    console.log(`total ${acc}`);
    console.log(`money: ${crtItem.salary}`);
    acc += crtItem.salary;
    return acc;
}, 0);

// Date

const months = [ 
    'January',
    'February',
    'March',
    'April',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const days =[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

const date = new Date();
const month = date.getMonth();
console.log(months[month]);

const day = date.getDay();
console.log(days[day]);

console.log(date.getDate());
console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`;

document.body.innerHTML = sentence;

// accesing a DOM element through JS

document.body.style.backgroundColor = 'blue';


