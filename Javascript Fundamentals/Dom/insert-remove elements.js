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




// innerHTML  -  get the hole html content
// TextContent  -  get the text content only


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




