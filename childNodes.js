const result = document.querySelector('#result')
const allchildren = result.childNodes
console.log('ALL children')
console.log(allchildren)

const children = result.children
console.log('children of that specific node')
console.log(children)
console.log(result.firstChild)
console.log(result.lastChild)

//parent element

console.log('parent element')
const paragraph = document.querySelector('p')
const parent = paragraph.parentElement
parent.style.color = 'red'
console.log(parent)

//next sibling
console.log('next sibling')
const first = document.querySelector('.first')
const nxt = first.nextSibling.nextSibling
console.log(nxt)

//previous sibling
console.log('previous sibling')
const last = document.querySelector('.last')
const prv = last.previousSibling.previousSibling
console.log(prv)

//the reason we run it twice is because the first ime it gets the white space but then the next time it gets the next element

//so an easier method is nextElementSibling & previousElementSibling
console.log('nextElementSiblin')
const nxtelement = first.nextElementSibling
console.log(nxtelement)
