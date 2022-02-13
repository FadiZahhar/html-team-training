//conditional statements
//> , >= ,< , <= , == , === , != , !==

if (2 > 1) {
  console.log('condition true')
} else {
  console.log('condition false')
}

const value = false
if (!value) {
  console.log('condition !false which is true')
}

const num1 = 6
const num2 = '6'

console.log(num1 == num2)
console.log(num1 === num2)

// logical operators
// OR => ||
//AND => &&

if (2 > 1 || 1 > 2) {
  console.log('one condition is true')
} else {
  console.log('both conditions false')
}

if (2 > 1 && 1 > 2) {
  console.log('both conditions are true')
} else {
  console.log('one condition is false')
}

//switch statement
const x = 1
switch (x) {
  case 1:
    console.log('x is 1')
    break
  case 2:
    console.log('x is 2')
    break
  default:
    console.log('x is anything else')
    break
}

//loops
//while loop
let amount = 5
while (amount > 0) {
  console.log('I have ' + amount + 'in my account')
  amount--
}
//dowhile loop
let money = 0
do {
  console.log('I have ' + money + 'in my account')
} while (money > 0)

//for loop
for (let i = 0; i < 10; i++) {
  console.log(i)
}
