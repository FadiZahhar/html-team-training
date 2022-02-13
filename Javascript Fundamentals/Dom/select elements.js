// DOM


// Similar to CSS

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
//     lists[i].style.backgroundColor = 'yellow'
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

// last child
const lastLi = document.querySelector('.li:last-child')
console.log(lastLi);

// childNodes - returm all child nodes including wgitespace witch is treated as a  text node
const allchild = allOl.childNodes;
console.log(allchild);

// first node-child 
const frst = allOl.firstChild;
console.log(frst);

// last node-child 
const lst = allOl.lastChild;
console.log(lst);

// parentElement
// get the direct parent element

const heading2 = document.querySelector('h2');
const parent = heading2.parentElement;
console.log(parent);



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



// getAttribute()   // get the attributes like : id, class, style, href
// setAttribute()   // set the attributes

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
