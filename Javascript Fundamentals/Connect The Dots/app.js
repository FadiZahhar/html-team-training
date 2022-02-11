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

// callback function

function morning(name) {
    let newName = `${name} `;
    return (`Good morning ${newName.repeat(3)}`);
}
function evening(name) {
    return (`Good evening ${name.toUpperCase()}`);
}

function greet(name, cbfunction) {
    const myName = "Ali"
    console.log(`${cbfunction(name)}, my name is ${myName}.`);
}

greet('Alaa',morning);
greet('Alaa',evening);