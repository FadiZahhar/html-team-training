<style> 
li{
background:red;
position: relative;

}
ol{
position: relative;
}
</style>
<body>

<h2>This is bold text<h2>

<ol>
    <li>
       This text is italicized
    </li>
    <li>
      All this text is important
    </li>
</ol>

<p>All this text is important</p>
<h1>The end</h1>

</body>

basics
let
const
var

- - - / % ()
      module

implicit type conversion
ex:
'10' - '5' : 5
'15' / '2': 7.5
but '5' + 15 : '515' since its like string concatination

input type number only ensure to enter number but the type of this nunber still a string, to prevent that we use: let num= parseInt(value);

data type 7:
primitive:
string : const text ="some text" ; typeof text = string
number : const num = 45; typeof num = number
boolean : const bool = true; typeof bool = boolean
null : const result = null; typeof null = object
undefined : let name; typeof null = undefined; this is a bug ans it wil be not fixed since its start from the launch of JS and many code are based on it
symbol
object: array, function, object

array:
array: const friends = ["ali",2,"fadi",null];
console.log(friends[0]): 'ali'; arrays are 0 index
reassign value: friends[1]="rayan"; console.log(friends[1]): 'rayan'

functions: declare, invoke
declairation:
function calculate(value) {
const newValue = value \* 2.54;
console.log("the value in cm is : " + newValue + " cm.")
return newValue;
}
or
const newcalculate=function(value) {
const newValue = value \* 2.54;
console.log("the value in cm is : " + newValue + " cm.")
return newValue;
}
// function expression

invoke:
calculate(150)
newcalculate(50)

---

//object
const person = {
name: 'Ali',
age: 30,
married: false,
friends: ['fady', 'fatima', 'nour', 'rayan', 'lamies', 'lora', 'anthony'],
//greeting(){} or
greeting: function () {
console.log("Hello from " + this.name);
return 2;
}
}
const val = person.greeting()
console.log(val);

---

---

// conditional statment
// < , > , >= , <= , == , === , != , !==
// if else if else !
// == check value === check value and type

// const num1 = 17;
// const num2 = 17;

// if (num1 > num2) {
// console.log(num1 + " bigger than " + num2);
// }
// else if (num2 > num1) {
// console.log(num2 + " bigger than " + num1);
// }
// else {
// console.log(num1 + " equal to " + num2);
// }

num1 = 10;
num2 = '10';
num3 = 20;
num4 = 20;
const validation = function (number1, number2) {
if (number1 == number2) {
console.log('first number and second one are equal')
}
else if (number1 != number2) {
console.log('first number and second one are not equal')
}

    if (number1 === number2) {
        console.log('first number and second one having the same type')
    }
    else if (number1 !== number2) {
        console.log('first number and second one are from different type')
    }

}

validation(num1, num2)
validation(num3, num4)

---

---

// logical operators
// (|| - or) , (&& - and)

const name = "Ali";
const age = 30;

if (name === "Ali" && age === 30) {
console.log("Name and age matches");
}
else if (name === "Ali" || age === 30) {
console.log("Some value matches");
}
else {
console.log("wrong values");
}

---

---

// switch
// dice values: 1-6

const dice = 1;

switch (dice) {
case 1:
console.log("you got one");
break;
case 2:
console.log("you got one");
break;
case 3:
console.log("you got three");
break;
case 4:
console.log("you got four");
break;
case 5:
console.log("you got five");
break;
case 6:
console.log("you got six");
break;
default:
console.log("you didnt got yhe dice");

}

---

---

// loop
// while loop
// do while loop
// code block first, condition second
// run at least
// for loop

// while
let amount = 10;
while (amount > 0) {
console.log('I have ' + amount + ' $');
amount--;
}

// do while
// it run at least one time even if condition does not satisfy
let count = 15;
do {
console.log('I have ' + count + ' $');
count++;
} while (count < 10);

// for loop

for (let i = 0; i <= 10; i++) {
console.log('You are in the floor number ' + i + '.');
}

---

<body>
<h1>Connect The Dots</h1>

<h2>string property and methods</h2>

// string property and methods.
// wrapper string object, don't memorize methods

const person = {
name: 'Ali',
age: 30,
married: false,
greeting() { console.log('Hello from ' + this.name + " !!!") },
education: true
}

person.greeting();
console.log(person.name.length); // the length of the text
console.log(person.name.toLowerCase()); // to lower case
console.log(person.name.toUpperCase()); // to upper case
console.log(person.name.charAt(1)); // print the char of index 1
console.log(person.name.toUpperCase().charAt(1)); // print the char of index 1 after upper case
console.log(person.name.charAt(person.name.length - 1)); // print the last char
console.log(person.name.indexOf('A')); // print the first index of char "A"
let text = " Ali El-Helbawi";
console.log(text);
console.log(text.trim()); //trim the spaces from the start and the end
console.log(text.startsWith("ali")); // boolean true start with 'ali'
console.log(text.trim().toLowerCase().startsWith('ali')); // boolean true if after trim and to lower case start with 'ali'
console.log(text.includes('li')); // boolean true if include 'li'
console.log(text.slice(0, 3)); // char from index 0 to index 3-1: 2
console.log(text.slice(-3)); // last 3 char

// template literals - ES6+
// backtick characters `` - above tab (left from one)
// interpolatio ${} - insert expression value
const friend = 'Alaa';

const carOwner = "This it's not " + friend + "'s car";
console.log(carOwner);

const newCarOwner = `This it's not ${friend}'s car.\nShe is ${20 + 12} years old.`;
console.log(newCarOwner);

<h2>array property and methods</h2>

// array property and methods

let names = ['Ali', "Alaa", 3, -45, false];

// length
console.log(names.length);
console.log(names[0]);
console.log(names[names.length - 1]);

// concat concat 2 array
const lastNames = ['Karkaba', 'El-Helbawi'];
const allNames = names.concat(lastNames)
console.log(allNames);

// reverse reverse the array
console.log(allNames.reverse());

// unshift add item to the beginning of the array
allNames.unshift('Nour');
console.log(allNames);
allNames.unshift('Fatima');
console.log(allNames);

// shift remove the 1st item of the array
allNames.shift();
console.log(allNames);
allNames.shift();
console.log(allNames);
allNames.shift();
console.log(allNames);

// push add item at the end of the array
allNames.push('Nour');
console.log(allNames);
allNames.push('Fatima');
console.log(allNames);

// pop remove the last item of the array
allNames.pop();
console.log(allNames);
allNames.pop();
console.log(allNames);
allNames.pop();
console.log(allNames);

// splice - mutates origial array
const specificNames = allNames.splice(1, 2);
// splice(X,Y):we remove Y elemnt from the array starting the index X
console.log(specificNames);
console.log(allNames);

<h2>array and for loop</h2>

const newNames = ['Ali', 'Alaa', 'Fatima', 'Nour'];
const lastName = "Study";
let newArray = []

for (let i = 0; i < newNames.length; i++) {
const fName = `${newNames[i]} ${lastName}`
newArray.push(fName)
}

console.log(newArray);

<h2>functions, return, if, arrays, for loop</h2>

const gas = [10, 30, 20, 15];
const food = [40, 70, 10, 80];

function calculateTotal(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
sum += arr[i]
}
if (sum > 100) {
console.log(`Woah!! You spend too much !!!`);
return sum;
}
console.log(`You spend less than 100.`);
return sum;
}

const gasTotal = calculateTotal(gas)
const foodTotal = calculateTotal(food)
const randomTotal = calculateTotal([50, 40, 70]);

console.log({
gas: gasTotal,
food: foodTotal,
random: randomTotal
});

<h2>reference vs value</h2>

// primative type
// string, number, symbol, boolean, undefiend, null
// arrays, functions, objects - object
// typeof

// when assigning primitive data-type value to a variable, any changes are made directly to that value without affecting the original value

// when assigning non-primitive data-type value to a variable, any changes are made directly to that value will affecting the original value since its done by reference

let num1 = 1;
let num2 = num1;
num2 = 3;
console.log(`num 1: ${num1}`)
console.log(`num 2: ${num2}`)

const person1 = { name: "Ali" }
let person2 = person1;
let person3 = { ...person1 }
person2.name = "Alaa"
console.log(`person 1 name: ${person1.name}`)
console.log(`person 2 name: ${person2.name}`)
console.log(`person 3 name: ${person3.name}`)

<h2>Null and undefined</h2>

// both present "no value"

// undefined : javascript cannot find a value for it

// variable without value
// missing function arguments
// missing object properties

// null : developer sets the value
let number1 = 10 + null;
let number2 = 10 + undefined;
console.log(number1); // 10
console.log(number2); // NaN

<h2>Truthy and Falsy</h2>

// "", '', ``, -0, 0, NaN, null, undefined.

let text1 = "Ali";
let text2 = -0;
if (text1) {
console.log(`Hey. Im truthy.`);
}
if (!text2) {
console.log(`Hey. Im falsy.`);
}

<h2>unary operator typeof</h2>
// unary operator typeof
let text = 'some text';
// console.log(typeof text); //operand
// binary operator - assignment
let number = 3;
let number2 = 3 + 5;
// ternary operator
// condition  ? (runs if true):(runs if false)

const value = -1 > 0;
value ? console.log(`TRUE`) : console.log(`FALSE`);

<h2>Global scope vs Local scope</h2>

// Global scope vs Local scope
// any variable outside code block {} is said to be in global scope
// can be access anywhere in the program
// Gotchas: name collisions, modify by mistake

let myName = 'Ali';

function changeName() {
console.log(myName);
myName = 'Alaa'
}

changeName()
if (true) {
console.log(myName);
myName = 'Loulou'
}
console.log(myName);

<h2>callback function</h2>

function morning(name) {
let newName = `${name} `;
return (`Good morning ${newName.repeat(3)}.`);
}
function evening(name) {
return (`Good evening ${name.toUpperCase()}.`);
}

function greet(name, cbfunction) {
const myName = "Ali"
console.log(`${cbfunction(name)}, my name is ${myName}.`);
}

greet('Alaa',morning);
greet('Alaa',evening);

<h1>Powerfull array methods</h1>

// forEach, map, filter, find, reduce
// Iterate over array, no for loop required
// Accept callback function as an argument, calls Callback against each
// item in an array. Reference item in the Callback parameter.

<h2>forEach</h2>
// forEach
// does not return new array

const people = [
{ name: 'Alaa', age: 32, position: 'Doctor' },
{ name: 'Ali', age: 30, position: 'Full Stack Developer' },
{ name: 'Nour', age: 25, position: 'Front-End Developer' },
{ name: 'Fatima', age: 23, position: 'Front-End Developer' }
]

function showPerson(person) {
console.log(person);
}

people.forEach(showPerson)

people.forEach(function (item) {
console.log(item.age.toString());
})

<h2>map</h2>

// map
// does return new array
// does not change size of original array
// uses values from original array when making new one

const people = [
{ name: 'Alaa', age: 32, position: 'Doctor' },
{ name: 'Ali', age: 30, position: 'Full Stack Developer' },
{ name: 'Nour', age: 25, position: 'Front-End Developer' },
{ name: 'Fatima', age: 23, position: 'Front-End Developer' }
]

const ages = people.map(function (person) {
return person.age
})

const newPeople = people.map(function (person) {
return { ...person, married: true }
})

const names = people.map(function (person) {
return `<h1 style="color:red">${person.name}</h1>`
})

console.log(ages)

console.log(newPeople)

document.body.innerHTML = names.join('')

<h2>filter</h2>

// filter
// does return new array
// can manipulate the size of new array
// returns based on consition

const people = [
{ name: 'Alaa', age: 32, position: 'Doctor' },
{ name: 'Ali', age: 30, position: 'Full Stack Developer' },
{ name: 'Nour', age: 25, position: 'Front-End Developer' },
{ name: 'Fatima', age: 23, position: 'Front-End Developer' }
]

const youngPeople = people.filter(function (person) {
return person.age <= 25 && person.name.includes("our")
})

console.log(youngPeople);

<h2>find</h2>
// find
// return single instance - (in this case object)
// return first match, if no match it returns indefined
// great for getting unique value

const names = ['Ali', 'Alaa', 'Nour', 'Fatima']

console.log(names.find(function (name) {
return name === 'Alaa' || name === 'Ali'
}));

const people = [
{ name: 'Alaa', age: 32, position: 'Doctor', id: 1 },
{ name: 'Ali', age: 30, position: 'Full Stack Developer', id: 1 },
{ name: 'Nour', age: 25, position: 'Front-End Developer', id: 2 },
{ name: 'Fatima', age: 23, position: 'Front-End Developer', id: 3 }
]

const person = people.find(function (person) {
return person.id === 1
})
console.log(person);

<h2>reduce</h2>

// reduce
// iterates, callback functions
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculation
// 2 parameter ('curr') - current iteration/value

const people = [
{ name: 'Alaa', age: 32, position: 'Doctor', id: 1, salary: 2000 }
,
{ name: 'Ali', age: 30, position: 'Full Stack Developer', id: 1, salary: 2500 },
{ name: 'Nour', age: 25, position: 'Front-End Developer', id: 2, salary: 1560 },
{ name: 'Fatima', age: 23, position: 'Front-End Developer', id: 3, salary: 1560 }
]

const total = people.reduce(function (acc, curr) {
console.log(`total :${acc}`);
console.log(`current :${curr.salary}`);
acc += curr.salary;
return acc;
}, 0)

console.log(total);

<h1>Math</h1>
// Math
// standart build-in objects - always availble

const number = 4.56789
// floor : round down
const result1 = Math.floor(number)
console.log(result1);

// ceil : round up
const result2 = Math.ceil(number)
console.log(result2);

// sqrt : square-root
const result3 = Math.sqrt(number)
console.log(result3);

// PI : value of PI
const result4 = Math.PI;
console.log(result4);

// min : minimum value
const result5 = Math.min(0, -5, 18, 35, -96)
console.log(result5);

// max : maximum value
const result6 = Math.max(0, -5, 18, 35, -96)
console.log(result6);

// random: random random between 0 and 0.999999 (1-)
const result7 = Math.random()
console.log(result7);

// to get int random between 0 and X
// Math.floor(Math.random() _ X) + 1
const result8 = Math.floor(Math.random() _ 10) + 1
console.log(result8);

<h1>Date</h1>
// Date
// Date

const monthNames = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const date = new Date() // full date
console.log(date);

const month = date.getMonth() // month index [0 .. 11]
console.log(monthNames[month]);

const day = date.getDay() // day index [0 .. 6]
console.log(dayNames[day]);

const current_date = date.getDate() // date index [0 .. 31]
console.log(current_date);

const year = date.getFullYear() // year
console.log(year);

const sentence = `${dayNames[day]}, ${date.getDate()} ${monthNames[month]} ${date.getFullYear()}.`

console.log(sentence);
const newDate = new Date('3/20/2021'); // month-day-year

document.body.innerHTML = ([`<h1>${sentence}</h1>`, `<h3>${newDate}</h3>`]).join('');

<h1>DOM</h1>

// DOM

<h2>select the element or group of elements needed to be effected</h2>

// select the element or group of elements needed to be effected
// decide the effect we want to apply to the selection

// many different ways

document.body.style.backgroundColor = 'black';
document.body.style.color = 'red';
document.getElementById('btn').style.color = 'blue';
document.getElementById('btn').style.backgroundColor = 'green';
document.getElementById('btn').style.fontSize = '2rem';

// assign to a varible
const btn = document.getElementById('btn');
// do something
btn.style.width = '100px';
btn.style.height = '150px';

// window object

// return a node object or a node list, which is an array like object

console.log(btn);
const btnName = btn.nodeName;
const css = btn.style;
console.log(btnName);
console.log(css);

// select element by id
// select elememt by tagName ex: h1, h2 , p, li, ul

const headings1 = document.getElementsByTagName('h1');
console.log(headings1);
headings1[0].style.backgroundColor = 'white';

const lists = document.getElementsByTagName('li');

// for (let i = 0; i < lists.length; i++) {
// lists[i].style.backgroundColor = 'yellow'
// }
const bestLists = [...lists];
console.log(lists);
console.log(bestLists);
bestLists.forEach(function (li) {
li.style.textAlign = 'center';
li.style.width = 'auto';
li.style.display = 'block';
li.style.color = 'green';
li.style.backgroundColor = 'white';
})

// get element by className
const liClasses = document.getElementsByClassName('li');
liClasses[1].style.backgroundColor = 'orange'

// querySelector('any css') - selects single
// querySelectorAll('any css') - selects all

const allLi = document.querySelectorAll('.li');
console.log(allLi);
allLi.forEach(function (item) {
item.style.fontSize = '2rem'
})

const allOl = document.querySelector('#ol');
console.log(allOl);

<h2> elements</h2>

// last child
const lastLi = document.querySelector('.li:last-child')
console.log(lastLi);

// childNodes - returm all child nodes including wgitespace witch is treated as a text node
const allchild = allOl.childNodes;
console.log(allchild);

// first node-child
const frst = allOl.firstChild;
console.log(frst);

// last node-child
const lst = allOl.lastChild;
console.log(lst);

// previousSibling
// nextSibling
// return white space

const first = document.querySelector('.first');
const last = document.querySelector('#last');

const nextSibling = first.nextSibling.nextSibling;
// first one return white space

const previousSibling = last.previousSibling.previousSibling;
// first one return white space

nextSibling.style.color = 'red'
previousSibling.style.color = 'green'

console.log(nextSibling);
console.log(previousSibling);

// previousElementSibling
// nextElementSibling

const first = document.querySelector('.first');
const last = document.querySelector('#last');

const nextElemnt = first.nextElementSibling;
// first one return white space

const previousElemnt = last.previousElementSibling;
// first one return white space

nextElemnt.style.color = 'red'
previousElemnt.style.color = 'green'

console.log(nextElemnt);
console.log(previousElemnt);

// nodeValue - return text value and should use .firstChild before it
// textContent - return text value directly

const item = document.getElementById('special');
////
const val = item.nodeValue; // return Null
console.log(val);
const value = item.firstChild.nodeValue; // return the value
console.log(value);
///
const easyValue = item.textContent;
console.log(easyValue);

// getAttribute() // get the attributes like : id, class, style, href
// setAttribute() // set the attributes

const first = document.querySelector('.first');
const link = document.getElementById('link');

console.log(link);

const classValue = first.getAttribute('class');
const idValue = first.getAttribute('id');
const styleValue = first.getAttribute('style');

const linkValue = link.getAttribute('href')

console.log(classValue);
console.log(idValue);
console.log(styleValue);

console.log(linkValue);

const links = document.querySelectorAll('.first');
console.log(links);

link.setAttribute('href', 'index.html')

const newLinkValue = link.getAttribute('href')
console.log(newLinkValue);

<h2>Add-Remove CSS Classes</h2>

// className
// classList

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

// className

// add only one classe
first.className = 'color';
second.className = 'size';
third.className = 'size color';

// classList

// add one or multiple classes
second.classList.add('color', 'size');

// remove one or multiple classes
first.classList.remove('color')

// check if the element contain or have a specific class
// it returns a boolean value - true or false
let result = first.classList.contains('color');
console.log(result);
result = second.classList.contains('size');
console.log(result);

<h2>insert-remove elements</h2>

// createElement('lement') - create emply element
// createTextNode('text content') - create text node
// element.appendChild(child element) - append the created element to the body or to another element
// insertBefore(element,location)
// replaceChild(old-element, new-element)

const result = document.querySelector('#result');

// create emply element
const newDiv = document.createElement('div')
// create text node
const text = document.createTextNode('Text created using JS magic.')
// append the text to the created div
newDiv.appendChild(text);

// append the created div to the body
document.body.appendChild(newDiv)

newDiv.classList.add('blue')

// insertBefore(element,location)

const newHeading = document.createElement('h2');
const text2 = document.createTextNode('Heading text using JS magic.');
newHeading.appendChild(text2);
document.body.insertBefore(newHeading, newDiv)

// replaceChild(old-element, new-element)

const smallheading = document.createElement('h6');
const h6text = document.createTextNode('heading6');
smallheading.appendChild(h6text);
smallheading.classList.add('red');
document.body.replaceChild(smallheading, newHeading)

// prepend - make the element in the beginning of the body
// innerText - creat a text for an element

const headingH2 = document.createElement('h2');
const headingH1 = document.createElement('h1');
headingH2.innerText = `Inner Text appended`;
headingH1.innerText = `Inner Text prepended`;

document.body.append(headingH2)
document.body.prepend(headingH1)

// remove
// removeChild

// remove
const result = document.querySelector('#result');
result.remove();

// removeChild
const last = document.querySelector('#last');
const heading = last.querySelector('h1');
last.removeChild(heading);

// innerHTML - get the hole html content
// TextContent - get the text content only

const list = document.getElementById('first')
const div = document.getElementById('second')
const item = document.querySelector('.item')

console.log(list.innerHTML);
console.log(div.textContent);
console.log(list.textContent);

const ul = document.createElement('ul');
ul.innerHTML = `<li>list item 2</li>

<li>list item 2</li>`;

div.append(ul);

</body>
