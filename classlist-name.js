const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
//className sets a class but overrides any existing classes
const classValue = first.className
console.log(classValue)

second.className = 'colors'
second.className = 'text colors'

//adds a new class to existing classes
third.classList.add('colors')
console.log(third.className)
third.classList.add('text')
console.log(third.className)
third.classList.remove('text')
console.log(third.className)

//check if a node have a class
if (third.classList.contains('colors')) {
  console.log('present')
} else {
  console.log('absent')
}
