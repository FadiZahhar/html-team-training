//createElement('element)
const result = document.querySelector('#result')

const bodydiv = document.createElement('div')
//creatTextNode('text content)
const text = document.createTextNode('a simple div')

//appendChildren('element')
bodydiv.appendChild(text)

document.body.appendChild(bodydiv)

console.log(result.children)
const heading = document.createElement('h2')
const textheading = document.createTextNode('hello from heading')
heading.classList.add('blue')
heading.appendChild(textheading)
result.appendChild(heading)

//insert before
const title = document.createElement('h1')
const titletext = document.createTextNode('Title here')
title.appendChild(titletext)
document.body.insertBefore(title, result)

//replaceChild('new','old')

const heading2 = document.createElement('h5')
const h2text = document.createTextNode('small heading')
heading2.classList.add('blue')
heading2.appendChild(h2text)
document.body.replaceChild(heading2, title)
