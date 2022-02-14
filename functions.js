//fuctions are first class objects - stores in a variable(expression), passed as an argument to another function , return from the function(closure)

//higher order function- accepts another function as an argument or returns another function as a result

//callback function - passed to another function as an argument and execyted inside that function

function morning(name) {
  return `good morning ${name}`
}

function afternoon(name) {
  return `good afternoon ${name}`
}

function greet(myname, callbackfunction) {
  console.log(`${callbackfunction}, my name is ${myname}`)
}

greet('lora', morning('lia'))
greet('john', afternoon('susy'))
