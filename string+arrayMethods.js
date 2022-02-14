//string proprties & methods

let text = 'Hello'
console.log('length :' + text.length)
console.log('lowercase :' + text.toLowerCase())
console.log('uppercase :' + text.toUpperCase())
console.log('get char at a location :' + text.charAt(0))
console.log('get last char :' + text.charAt(text.length - 1))
console.log(
  'get the index of a certain char-case sensitive  : ' + text.indexOf('l')
)
//trim Removes the leading and trailing white space and line terminator characters from a string.
console.log('text after trim : ' + text.trim())
console.log(' does the text start with h?  ' + text.startsWith('hello'))
//remove white spaces and lower case so starts with is now true
console.log(
  ' does the text start with h?  ' +
    text.trim().toLowerCase().startsWith('hello')
)
console.log('does the text include a certain substring' + text.includes('ll'))

console.log('slicing from start to position 2  ' + text.slice(0, 2))
console.log(
  'slicing  from index 3 from the end of the string ' + text.slice(-3)
)

//tempalte literals
const firstName = 'jhon'
const age = 25
//instead of such concatination
const sentence = "hey it's " + firstName + 'and he is ' + age + ' years old'
console.log(sentence)
//we can use this template literals using backticks interpolation
const value = `hey it's ${firstName} and he is ${age} years old`
console.log(value)

//array proprties and methods
let names = ['a', 'b', 'c', 'd']
console.log('get array length : ' + names.length)
console.log(names[names.length - 1])
let letters = ['e', 'f']
//concat 2 arrays
const myarray = names.concat(letters)
console.log('concat 2 arrays   :' + myarray)
console.log('reverse of array  :' + myarray.reverse())
// add to the begining: UNSHIFT
myarray.unshift('!')
console.log('add to the begining of the array   :' + myarray)
// remove from the begining: SHIFT
myarray.shift()
console.log('remove from the begining of the array  :' + myarray)
// add to the ending: PUSH
myarray.push('!')
console.log('add to the ending of the array   :' + myarray)
// remove from the ending : POP
myarray.pop()
console.log('remove from the ending of the array  :' + myarray)
// SPLICE takes 2 arguments the index number and how many elements I want to slice starting from that index "mutates the original array"
console.log('before:  ' + myarray)

console.log('slice :  ' + myarray.splice(1, 3))
console.log('after:   ' + myarray)

//ternary operation
// condition? true:false;
let result1
1 < 2 ? (result1 = 'less') : (result1 = 'more')
console.log(result1)
