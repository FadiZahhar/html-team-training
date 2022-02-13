const friends = ['lia', 'lin', 'bob', 'rim', 45, null, undefined]

console.log(friends)
console.log(friends[0])

//change values in arrays
friends[4] = 'tia'
console.log(friends[4])

//functions declaration
function sayhello() {
  console.log('hellothis is from the function')
  console.log(friends[4])
  console.log('function ends')
}
//function calling
sayhello()

//function with parameters
function greet(person) {
  console.log('Hello Mr/Mss  :  ' + person)
}
//calling the function
greet(friends[0])

//function using return
function toinch(number) {
  return number * 2.54
}

//calling and logging
console.log(toinch(2) + 'cm')

// function expression
const add = function (number) {
  return number * 2.54
}

//arrow functions
const multiply = (number) => number * number
//call arrow function
console.log(multiply(3))

//creation of objects
const person = {
  name: 'lora',
  hight: 67,
  graduated: false,
  languages: ['java', 'c#', 'python'],
  greeting: function () {
    console.log('hello')
  },
}
//accessing the objects
person.greeting()
console.log(person.name)
