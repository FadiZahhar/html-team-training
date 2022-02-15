//nodevalue
const item = document.getElementById('special')
const value = item.nodeValue
console.log(value)
console.log(item.childNodes)
console.log(item.childNodes[0])
console.log(item.childNodes[0].nodeValue)
//or another method
console.log(item.firstChild.nodeValue)

//text content is an easier method to get the text content

console.log('textContent')
console.log(item.textContent)

//get attribute
console.log('get attribute')

const firstclass1 = document.querySelector('.first')
console.log(firstclass1)
const classvalue = firstclass1.getAttribute('class')
console.log(classvalue)

console.log('get attribute from link')
const link = document.getElementsByTagName('a')[0]
const linkid = link.getAttribute('class')
console.log(linkid)
//set attribute
console.log('set attribute')
const setlinkid = link.setAttribute('class', 'edit')

console.log(link.getAttribute('class'))
const last = link.nextElementSibling
last.setAttribute('class', 'first')
last.textContent = 'I am a last'
console.log(last)
