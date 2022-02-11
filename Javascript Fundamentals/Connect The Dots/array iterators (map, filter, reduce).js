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

// reverse  reverse the array
console.log(allNames.reverse());

// unshift  add item to the beginning of the array
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

// push  add item at the end of the array
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





/// array and for loop

const newNames = ['Ali', 'Alaa', 'Fatima', 'Nour'];
const lastName = "Study";
let newArray = []

for (let i = 0; i < newNames.length; i++) {
    const fName = `${newNames[i]} ${lastName}`
    newArray.push(fName)
}

console.log(newArray);



// functions, return, if, arrays, for loop

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



// reference vs value
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


// Null and undefined
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




// Truthy and Falsy
// "", '', ``, -0, 0, NaN, null, undefined.

let text1 = "Ali";
let text2 = -0;
if (text1) {
    console.log(`Hey. Im truthy.`);
}
if (!text2) {
    console.log(`Hey. Im falsy.`);
}

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