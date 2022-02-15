//get element by id
const h1 = document.getElementById('title')
h1.style.color = 'red'

const btn = document.getElementById('btn')
btn.style.backgroundColor = 'yellow'

//get element by tagName
//returns a node-list=array like object

const heading = document.getElementsByTagName('h2')
heading[0].style.color = 'blue'
console.log(heading.length)
console.log(heading)

//cant perform foreach on node-list
const items = document.getElementsByTagName('li')
// items.forEach((element) => {
//   console.log(element)
// })
items[2].style.color = 'orange'
const arrayitems = [...items]
arrayitems.forEach((element) => {
  console.log(element)
})

//getelement by classname
console.log('getelement by classname')
const listItems = document.getElementsByClassName('list')
console.log(listItems)
listItems[0].style.color = 'gray'

console.log('querySelector')
//querySelector should specify # for id and . for classname
const result = document.querySelector('#result')
result.style.backgroundColor = 'blue'
const myitem = document.querySelector('.list')
console.log(myitem)

const lastItem = document.querySelector('li:last-child')
console.log(lastItem)
console.log('querySelectorall')
//querySelectorall
const listt = document.querySelectorAll('.list')
//notice we can use fooreach here while in getElementById awe could not

listt.forEach((element) => {
  console.log(element)
  element.style.color = 'red'
})
