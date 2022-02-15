const h2 = document.createElement('h2')

//use inner text instead of createTextnode an append
// innerText
h2.innerText = 'I am a dynamic heading'

//prepend add at the first
document.body.prepend(h2)

//remove
const h3 = document.querySelector('h3')
h3.remove()

// removechild
const result = document.querySelector('.result')
console.log(result.children)
const heading = document.querySelector('h1')
// result.removeChild(heading)

//innerHtml vs textcontent
const list = document.getElementById('first')
const div = document.getElementById('second')
const item = document.querySelector('.item')

console.log(div.textContent)
console.log(list.innerHTML)

//create nodes by innerHtml
const ul = document.createElement('ul')
ul.innerHTML = `<li class="item">list items</li><li>list item</li>`
document.body.appendChild(ul)
