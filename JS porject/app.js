// External JS

// variables

//LET VS CONST VS VAR

// using var
var value = "some value";

// using const (constant) - cannot re-assign
const lastNaming = "jordan"

// using let
let firstName = 'Nour Hammoud';
let address, state;
address = "choiefat";
state = 'Mount lebanon';


// String concatination
const Name = 'sarah';
const lastName = 'smith';
const fullName = Name + ' ' + lastName;
document.write(fullName);

// Numbers
const number = 34;
const number2 = 2.456;

const add = number + number2;
const sub = number - number2;
const mult = number * number2;

console.log(add);
console.log(sub);
console.log(mult);

// operators
let num = 34;
num += 5;
console.log(num);

let slice = 10;
slice++;
slice++;
// should be 12
slice --;
// should be 11
console.log(slice);

const slices = 10;
const children = 3;
const amount = slices / children;
console.log(amount);

// Arrays - []

const friends = ['john' , 'peter' , 'anna' , 'Bob' , 45 , undefined, null]
// this is how we acces an iten in an array:
friends[2] = 'suzy';
// the new array should replace anna with suzy
console.log(friends)

// Functions

// Declare
function hello(name) {
    // logic
    console.log('Hello there' + ' ' + name );
}
// Invoke with a paremeter
hello('Nour');

// another example on functions
function calculate(value)  {
    return value * 2;
}
console.log(calculate(100))
 
// functional definition/declaration
function addValues(num1,num2) {
    return num1 + num2;
}
const firstValue = addValues(3,4);

// object

const person = {
    name : 'john',
    lastName : 'peters',
    age : 40,
    education : true,
    siblings : ['anna','bob','peter'],
    greeting() {
        console.log('Hello my name is John');
    },
}
// accesing item in an object:
const age = person.age;
person.name = 'bob';
console.log(person.siblings[2]);
person.greeting();

// conditional Statements
// > , < , >=, <=, ==, ===, !=, !===

if (2 > 1){
    console.log('2 is greater than 1');
}

if (2 >= 3){
    console.log('true');
}
else {
    console.log('false');
}

const num1 = 6;
const num2 = '6';

const value1 = num1 == num2;
const value2 = num1 === num2;

console.log(value1);
console.log(value2);

// Logical operators (|| - or), (&& - and), !

const name5 = 'bob';
const age5 = 26;
// if one of the two values is true the logic should run
if(name5 === 'stan' || age5 === 26) {
console.log('right values')
}
else{
    console.log('wrong values');
}
// the two values should be true not one of them
if(name5 === 'bob' && age5 === 24){
    console.log('right values')
}
else{
    console.log('wrong values');
}

// switch

const dice = 3;

switch (dice) {
    case 1:
        console.log('you got one');
        break;
    case 2:
        console.log('you got two');
        break;
    case 3:
        console.log('you got three');
        break;
    default:
    console.log('you got none!');
}

// loops

let i;
for (i = 0; i < 10; i ++){
    console.log('and the number is' + i);
}

for (let number = 11; number > 0 ; number --){
    console.log('the number is' + number);
}

// string properties and methods

let text = ' Peter Jordan';

console.log(text.length);
console.log(text.toLowerCase);
console.log(text.toUpperCase);
console.log(text.charAt(1));
console.log(text.indexOf('e'));
console.log(text.trim());
console.log(text.trim().startsWith('Peter'));
console.log(text.includes('eter'));
console.log(text.slice(0,2));
 
// Template Literals - ES6
// Backticks and Interpolation


// Instead of writing this old way
const name8 = 'john';
const age8 = 25;
const sentence = "Hey it's" + name8  + "and his age is" + age8;
// The new version of JS created this easier way of concatenation
const value8 = `Hey it's ${name8} and his age is ${age8} and heres some math ${4+4}`;
console.log(value8);

// Array properties and methods
let names = ['john' , 'anna', 'bob', 'sarah', 'barry']

// length
console.log(names.length);
console.log(names.length -1);

// concat
const lastNames = ['pepper', 'onion', 'banana']
const allNames = names.concat(lastNames);
console.log(allNames);

// reverse
console.log(allNames.reverse());

// unshift
allNames.unshift('suzy');
console.log(allNames);

// shift
allNames.shift();
console.log(allNames);

// push
allNames.push('nour');
console.log(allNames);

// pop
allNames.pop();
console.log(allNames);

// splice - mutates original array
const specificNames = allNames.splice(2,2);
console.log(specificNames);
console.log(allNames);

// Arrays and for loop

const names1 = ['anna', 'susy', 'bob'];
const lastName1 = 'smith';
let newArray = [];

for(i = 0; i < names1.length; i ++) {
    console.log(i);
    console.log(names1[i]);
    const fullName = `${names1[i]} ${lastName1}`;
    newArray.push(fullName);
}

console.log(newArray);

// Functions

const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);

console.log(gasTotal, foodTotal);

// Reference VS value

// primitive data type

const number1 = 1;
let number3 = number1;
number3 = 9;
console.log(`the first value is ${number1}`);
console.log(`the second value is ${number3}`);

// non-primitive data type
 let object = { sign : 'aries'}
 let object2 = object;
 object2.sign = 'star';
 console.log(`the first value ${object.sign}`);
 console.log(`the second value ${object2.sign}`);

//  Null and undefined

let number4 = 20 + null;
console.log(number4);
let number5 = 20 + undefined;
console.log(number5);

// Ternary operator

// Instead of writing all this code:

//  if(value5) {
// console.log('true value');
//  }
//  else{
// console.log('false value');
//  }


// we use ternary operator
const value5 = 1 < 0;
value5 ? console.log('true value') : console.log('false value');

// global vs local variable

let global = 3;

function adding(num1, num2) {
    const global = 20;
    const result = num1 + num2 + global;
    return result;
}

console.log(adding(2, 4)); 





