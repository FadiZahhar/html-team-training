//foreach: accepts a call back function as an argument- does not return a new array

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'suzy', age: 30, position: 'manager' },
]

//the callback function used in foreach
function showPerson(person) {
  console.log('callback functiion and foreach  ' + person)
}
people.forEach(showPerson)

//the callback function can be an anonymous function
people.forEach((person) =>
  console.log(
    'anonymous function in side foreach   ' + person.name.toUpperCase()
  )
)

// MAP -it returns a new array of same size as the original array
const modifiedpeople = people.map((person) => {
  return person.age + 10
})

console.log(`after map function  ages now: ${modifiedpeople}`)

//FILTER - return new array based on a condition so clearly the size is not as the original one

const youngPeople = people.filter((person) => {
  return person.age <= 25
})
console.log('new array after filter method  :')
console.log(youngPeople)

//FIND - returns a single object NOT ARRAY the first match
//greate for getting unique values

const personfind = people.find((person) => {
  return person.age === 20
})
console.log('returned object after find method  :')
console.log(personfind)

// REDUCE - reduces to a single value (number,array,object)- takes 2 parameters and an initial value
// parameter ('acc')- total of all calculation
// parrameter ('curr')- current iteration/value
//value.reduce(function(acc, currItem), initial value )
const people2 = [
  { name: 'bob', age: 20, position: 'developer', salary: 200 },
  { name: 'peter', age: 25, position: 'designer', salary: 300 },
  { name: 'suzy', age: 30, position: 'manager', salary: 500 },
]

const total = people2.reduce((acc, currItem) => {
  console.log(`total : ${acc}`)
  console.log(`current money : ${currItem.salary}`)
  acc += currItem.salary
  return acc //VERY IMPORTANT TO RETURN THIS VALUE
}, 0)

console.log(total)
