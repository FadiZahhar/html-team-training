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



// CSS

const random = document.querySelector('.random');

random.style.backgroundColor = 'red';
random.style.color = 'white';
random.style.fontSize = '3rem';
random.style.textTransform = 'uppercase';

// or create class in CSS and add this class to our element
// random.classList.add('title')

