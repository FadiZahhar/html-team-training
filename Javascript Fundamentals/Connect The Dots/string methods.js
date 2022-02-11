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
console.log(text.startsWith("ali")); // boolean  true start with 'ali'
console.log(text.trim().toLowerCase().startsWith('ali')); // boolean  true if after trim and to lower case start with 'ali'
console.log(text.includes('li')); // boolean  true if include 'li'
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
