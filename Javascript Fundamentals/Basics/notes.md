<style> 
li{
background:red;
position: relative;

}
ol{
position: relative;
}
</style>
<body>

<h2>This is bold text<h2>

<ol>
    <li>
       This text is italicized
    </li>
    <li>
      All this text is important
    </li>
</ol>

<p>All this text is important</p>
<h1>The end</h1>

</body>

let
const
var

- - - / % ()
      module

implicit type conversion
ex:
'10' - '5' : 5
'15' / '2': 7.5
but '5' + 15 : '515' since its like string concatination

input type number only ensure to enter number but the type of this nunber still a string, to prevent that we use: let num= parseInt(value);

data type 7:
primitive:
string : const text ="some text" ; typeof text = string
number : const num = 45; typeof num = number
boolean : const bool = true; typeof bool = boolean
null : const result = null; typeof null = object
undefined : let name; typeof null = undefined; this is a bug ans it wil be not fixed since its start from the launch of JS and many code are based on it
symbol
object: array, function, object

array:
array: const friends = ["ali",2,"fadi",null];
console.log(friends[0]): 'ali'; arrays are 0 index
reassign value: friends[1]="rayan"; console.log(friends[1]): 'rayan'

functions: declare, invoke
declairation:
function calculate(value) {
const newValue = value \* 2.54;
console.log("the value in cm is : " + newValue + " cm.")
return newValue;
}
or
const newcalculate=function(value) {
const newValue = value \* 2.54;
console.log("the value in cm is : " + newValue + " cm.")
return newValue;
}
// function expression

invoke:
calculate(150)
newcalculate(50)

---

//object
const person = {
name: 'Ali',
age: 30,
married: false,
friends: ['fady', 'fatima', 'nour', 'rayan', 'lamies', 'lora', 'anthony'],
//greeting(){} or
greeting: function () {
console.log("Hello from " + this.name);
return 2;
}
}
const val = person.greeting()
console.log(val);

---

---

// conditional statment
// < , > , >= , <= , == , === , != , !==
// if else if else !
// == check value === check value and type

// const num1 = 17;
// const num2 = 17;

// if (num1 > num2) {
// console.log(num1 + " bigger than " + num2);
// }
// else if (num2 > num1) {
// console.log(num2 + " bigger than " + num1);
// }
// else {
// console.log(num1 + " equal to " + num2);
// }

num1 = 10;
num2 = '10';
num3 = 20;
num4 = 20;
const validation = function (number1, number2) {
if (number1 == number2) {
console.log('first number and second one are equal')
}
else if (number1 != number2) {
console.log('first number and second one are not equal')
}

    if (number1 === number2) {
        console.log('first number and second one having the same type')
    }
    else if (number1 !== number2) {
        console.log('first number and second one are from different type')
    }

}

validation(num1, num2)
validation(num3, num4)

---

---

// logical operators
// (|| - or) , (&& - and)

const name = "Ali";
const age = 30;

if (name === "Ali" && age === 30) {
console.log("Name and age matches");
}
else if (name === "Ali" || age === 30) {
console.log("Some value matches");
}
else {
console.log("wrong values");
}

---

---

---
