// assign to a variable

const element = document.getElementById('script');
element.style.color = 'red';
const bton = document.getElementById('btn');
bton.style.backgroundColor = 'yellow';

// getElementsByTagName('tagname');
// node-list = array-like object

const list = document.getElementsByTagName('li');
const items = [...list];

items.forEach(function(item){
    console.log(item);
})

items[2].style.color = 'orange';

// querySelector - select single
// querySelectorAll - select all

const result = document.querySelector('#specialLast');
result.style.color = 'red';
const products = document.querySelectorAll('.spec');
for (let i = 0; i < products.length; i++) {
  products[i].style.color = "blue";
}


// childNodes

// children
// firstChild
// last child

const results = document.querySelector('#result');
const children = results.children;
console.log(children);

console.log(results.firstChild);
console.log(results.lastChild);

// parentElement

const heading = document.querySelector('#oran');
console.log(heading.parentElement);

// next sibling
const first = document.querySelector('#oran');
first.nextSibling.nextSibling.style.color = 'red';

// next value
const item = document.querySelector("#text");
console.log(item.textContent); 

// getAttribute
// setAttribute

console.log(item.getAttribute('id'));
item.setAttribute('class', 'firstElement');

//  className
// classList

const first1 = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const value = first1.className;
console.log(value);
first1.classList.add('text');
second.className = 'colors';
third.classList.add('text');
third.classList.remove('text');

// createElemet
// createTextNode
// element.appendChild

const bodyDiv = document.createElement('div');
const text = document.createTextNode('hello');
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);

// remove
// removeChild
const user = document.querySelector('#user');
const remove = document.querySelector('#remove');

user.removeChild(remove);

// CSS

const name = document.querySelector('#name');
name.style.backgroundColor = 'blue';
name.style.color = 'white';
name.style.fontSize = '3rem';
name.style.textTransform = 'capitalize';
