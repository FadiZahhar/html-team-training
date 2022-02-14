// selecting all of them 
document.querySelectorAll('.btn').forEach(item =>{
 item.addEventListener('click',()=>{
  alert('this is good')
 })
 
  }
  )
  // hello world display on the browser
  document.write('hello world');
  document.write({name:'Fatima'});
  // when the page load we have the pop up box and the text is "hi"
  // alert('hi');
  console.log({name:'Fatima'});



  ///////////////////////////////////////////////////////////////////////////
/* Variable- most basic building blocks
 Variables -store ,access,Modify===Value
 Declare,Assignment operator,Assign Value 

we can set the value and assign the value 
 i can store an empty sting or 10 ... caractere
 declare a variable and assign a value */
let firstname="Hello";
// or
// let name="" ;
console.log(firstname);
// declaring multiple varaiables
let address,zip,state;
// i can assign a value like this  
// address name of the variables
address="a";
zip="b";
state="c";
// i can set all the variables in the same console.log()
console.log(address,zip,state);
// assign a value ,modify existing
firstname="world";
console.log(firstname);



//////////////////////////////////////////////////////////////////////
// can contain digits ,letters,underscore,$
// must start  with letter,$or _
let random123_$="random";
let $random123_$="random";
console.log(random123_$);
console.log($random123_$);
/* no keyword like let let="";its not gonna work
can t start with a nmbr

case sensitive -fullname vs Fullname this 2 are not the same

Let vs const vs var
 using var  var replaced by let by the time but they are the same*/
var value="var";
value="var 2";
// using const -cant re-assign and we have to declare a value
const last="const";

// using let
let big="let";
let="let 2";



////////////////////////////////////////////////////////////////////////////
/* "" or '' single quote it depends what do you prefer to use nfs l shi 
 we cane use both of them it not gonna change the result unless you do have a 'within we use ""*/
const one="";
const two ='';
//if i have a single quote in the text i use "" 
const one_$="john's course ...";



/////////////////////////////////////////////////////////////////////////////
/*string concatenation --combine string value
 `` --backticks(template string)easier option*/
const first="John";
const lastName="wick";
console.log("Hello my name is :"+ first+" "+lastName);
// or
let fullname=first+" "+lastName;
console.log("Hello my name is :"+ fullname);

const website="youtube";
const url="https://www."+website+".com";
console.log(url);



//////////////////////////////////////////////////////////////////////////////
/*   Numbers
 Note: the color of nmbr should be blue and  string is black
*/

let number=30;
const number1=30;

// basic maths opperation
const sum=number + number1;
const sub=number - number1;
const mul=number * number1;
const div=number / number1;

/*
 more operators:+= ,-=,/=,*=,--,%
 Modulus op (%) operator return the remainder after integer division
 */

number -=4;
number *=2;
number ++;
number++;
number --;
 const slices=10;
 const children=4;
 const amount1=slices %children;
 console.log("amount"+amount1);


 ////////////////////////////////////////////////////////


 // Implicit Conversion 

 // note we can convert string to number
 
 let sub1='10'-'2';//8
 let mul1='10'*'2';//20
/*

 When a number is added to a string, JavaScript converts the number to a string before concatenation.
  */
 let add5='10'+'java';//10java

////////////////////////////////////////////////////////
// parseInt(value);

const randomnumber=13;
document.querySelector('.form').addEventListener('submit',
function(e){
 e.preventDefault();
 let value =document.getElementById('amount').value;
 // return a string value from html 
 value=parseInt(value);
 console.log('/////////////////////////');
 console.log('Input value type');
 console.log(value);
 console.log(randomnumber+value);
}
);

////////////////////////////////////////////////////////
/* Data types -7 total
 Primitive -string ,Number,Boolean ,Null,Undefined,symbol
 Object -  Array,functions,objects
 typeof - operator(typeof variable )(typeof value )
 */

//string
const  text1="hello"
// number
const num=123;
//Boolean
let v=true;
let v1=false;
//Null
const a=null; //typeof :return object
//Undefined
let b;

console.log(typeof 1)//string
console.log(typeof num)//number
console.log(typeof v)//Boolean
console.log(typeof a)//object
console.log(typeof b)//Undefined

// Arrays , functions and objects 
// Array- [],0 index based

const friends=['john','bob','jad',null,undefined,20];
const bestfriends=friends[2];
friends[3]='anna';
console.log(bestfriends);
console.log(friends[2]);

// Functions -declare,invoke
function hello(){
 console.log("Hello")
}

hello();
// The parentheses may include parameter names separated by commas:(parameter1, parameter2, ...)

const bob="bob"
const anna="anna"

// function definition/declaration
function print(name,lastname){
 console.log("Hello"+name+" "+lastname)

}
print("John","anna");
print(bob,anna);

// Function Return

function myFunction(a, b) {
 return a * b;             // Function returns the product of a and b
}
const x=myFunction(3,3);
const y=myFunction(3,2);
const dimensions=[x,y];
console.log(dimensions)

// function expression another way to define a function :variable hold the function

const add=function(a,b){
return a+b;
}
const result=add(5,5);
// i can store the result in array

const dimensions1=[x,y,add(5,5)];
console.log(dimensions1);//[9,6,10]

// Arrow function
const multiple=(a,b)=> a*b;

// Obejects :key/value
const car = {
 type:"BMW", 
model:"500",
 colors:["white","black"], 
 number:100,
 salary:function(){
  console.log("dd")
 }

};
car.type="picanto";
console.log(car.type);
const type=car.model;
console.log(type);

////////////////////////////////////////////////
// conditonal statments
// >,<,>=,==,!=,!===

if(2>1){
console.log("2>1")
}
const variables=1>2;
if(variables){
 console.log("hello")
 }
 else{
  console.log("hello people");
 }
 //comparaison operators
 const num1=2;
 const num2=2;
 const num3='2';
 const num4=4;
 let res=num1>=num2;
 if(res){
  console.log("first num1 >= num2")
  }
  else{
   console.log("first num1 < num2")
  }
 // opposite !
 if(!res){
console.log("hi")
 }

 /*== checks only value
 === checks  value and type 
  */
 const check= 2 =='2';//true
 const checks=2 ==='2';//false
 const check2= 2 !=3;//true

 // logical operators (||	or) (&&	and)	
 const name1 ='peter';
 const age1=24;
 if( name1==="bob"|| age1===24){

 }else{

 }
 if( name1==="bob"&& age1===24){

}else{

}	
/* switch
dice value :1-6
const dice =1;
*/
const dice =1;
 switch(dice){
case 1:console.log("");
 break;
 case 2:console.log("");
 break;
case 3:console.log("");
 break;
default:console.log("");

 }
 /*
* all if

if(dice==1){

}
if(dice===2){

}
if(dice<1|| dice>6)
{

}

* else if 

if(dice==1){

}else
if(dice===2){

}
else {

}
*/


// Loop

let amount=10;
while(amount>0){
  console.log("")
  amount--;
}

//  do while loop  :code block first ,condition second

do{
  amount--;
}while(amount>0)

// for loop 
// set a variable inside the loop or outside 
// for(startvalue,end value,operator)
let i;
for(i=0;i<10;i++){
  console.log(i)
}
for(let j=11;j>=0;j--){

}


// connect the dots 


// string properties and methods

// 1-length():	Returns the length of a specified string 
let text="John Wick"
let res1=text.length;

// 2-toLowerCase()	:Converts a string to lower case letters
console.log(text.toLowerCase)//john wick

// 3-toUpperCase()	:Converts a string to upper case letters

// 4-charAt():	Returns the character at the specified index (position)
console.log(text.charAt(0))//J
console.log(text.charAt(text.length-1))//last value:k

// 5-indexOf()	:Returns the position of the first found occurrence of specified characters in a string
// 6-trim()	Removes whitespace from both ends of a string
// 7- text.includes("ohn"):true
// 8-  slice() method selects from a given start, up to a (not inclusive) given end.
console.log(text.slice(0,3))//joh
console.log(text.slice(-2))//ck


// Template Literals -ES6 +
//backtick char.. ``
//  insert expression value
const name="John"
const val=`Hey it's ${name}....${4+4}`


// Array properties and methods
let names = ["john", "bob", "ben"];

//1-lenght
console.log(names.length)//3
console.log(names[names.length-1])//ben

//2-concat :Joins two or more arrays, and returns a copy of the joined arrays
let age = ["23", "23", "23"];
const all=names.concat(age);["john", "bob", "ben","23", "23", "23"];

//3-reverse()	Reverses the order of the elements in an array
console.log(names.reverse())//["ben","bob","john"]

//4-unshift()	Adds new elements to the beginning of an array, and returns the new length
console.log(names.unshift('susy'))//["susy","ben","bob","john"] 

//5-shift()	remove elements from  the beginning of an array
console.log(names.shift('susy'))//["ben","bob","john"] 

//6- push()	Adds new elements to the end of an array
console.log(names.push('susy'))//["ben","bob","john","susy"] 

//7-pop()	Removes the last element of an array
console.log(names.push('pop'))//["ben","bob","john"] 

//8-splice()	Adds/Removes elements from an array
const spe=names.splice(0,2)//["ben","bob"]


//Array and for loop

const namess=['anna','susy','bob']
const Lastname='bos'
let newArray=[]

//for loop
for(let i=0;i<namess.length;i++)
{
  console.log(namess[i]);
  const fullname=`${namess[i]} ${Lastname}`;
  newArray.push(fullname)// ['anna bos','susy bos','bob bos']
}

// functions,return,if,arrays, for loop
const gaz =[20,40,100,30]
const food=[10,40,50]
function calculater(arr){
  let total=0
  for(let i=0;i<arr.length;i++)
  {
    total+=arr[i]
  }
  if(total>100){
console.log("....")
//  return 
return total ;
  }
  console.log("....")

return total;
}
const gasTotal =calculater(gaz);//190
const foodTotal =calculater(food);//100
const randomTotal =calculater([200,100,3]);
console.log({
  //key:value
  gaz:gasTotal,
  food:foodTotal,
})
/* 
when assigning primitive data type value to a variable any changes are made directly to that value ,
without affecting original value 
 
when assigning non-primitive data type value to a variable is done by reference
 so any changes will affect all the references.
 */

//primitive
const Number =1;
let number2=number;
number2=7;
console.log(`the first value is ${Number}`)//1
console.log(`the second value is ${number2}`)//7


//non-primitive
let person={person:'bob'}
let person2=person;
// let person2={...person};//give me the copy of the person not the reference
person2.name="susy";
console.log(`the name of the first person is ${person.name}`)//susy
console.log(`the name of the first second person is ${person2.name}`)//susy


/*
Null --developer set the value
and
Undefined --javascript can't find value for this 

let number=20+null //20+0
let number2=20+undefined //20+0

*/

// truthy and falsy
const Text= ''//empty string 
//false
if(Text){

}

// Ternary Operator
// condition ? <runs if true> : <runs if false>
const Value=1<0;
Value ?console.log(`true`):console.log(`false`)

/* Global scope :any variable outside the block{} is said to be in Global scope
can be access anywhere in the program 
vs local scope: can't be access from  outside the blocks
*/
let NAME="bob";
function calc(){
  const name='john'
  const age=25;
  globalvariable="global"
}
// console.log(age) error 
calc();
console.log(globalvariable)
// local variables
{
const name='susy';
}

// variable  lookup
 
const globalNumber=2;

function add1(num1,num2){
  const globalNumber=3;
const res2= num1+num2+globalNumber;//globalNumber=3
console.log(globalNumber)

function mult(){
  const globalNumber=4;
  const mult=res2*globalNumber;//globalNumber =4
console.log(globalNumber)
}
mult();
return res2
}
console.log(add1(3,4))

//callback function ,Higher Order  functions, functions as first class objects/citizens
// functions are first class - stored in a variables(expression) ,passed an argument to another function,return from th function
// Higher Order  functions - accepts another function as an argument or returns another functionas a result

//callback

function morning(name){
 return `Good morning ${name.toLowerCase() }`

}
//callback
function afternoon(name){
 return `Good afternoon ${name.repeat(3) }`

}
//Higher functions
function greet(name,cb){
 const MyName='john';
 console.log(`${cb(name)},my name is ${MyName}`)
}
greet('bob',morning)
greet('peter',afternoon)

// Array methods

const PERSON=[
 {name:'john',age:30,position:'designer',id:1},
 {name:'peter',age:20,position:'developer',id:2},
 {name:'bob',age:28,position:'boss',id:3},
]

//1- forEach()	:Calls a function for each array element

function show(person){
console.log(person.position)
}
 PERSON.forEach(show)
 // or 
 PERSON.forEach(function (item){
  console.log(item.position)
 })

// 2-map :	Creates a new array with the result of calling a function for each array element
// dosen't change size of original array
// use values from original array when making new one 
const Age= PERSON.map( function(person){
 return `<h3>${person.age}</h3>`;
});
const Age1= PERSON.map( function(person){
 return {
  firstname:person.name,
  oldage:person.age+30,
 };
});
console.log(Age);//[30, 20, 28]
console.log(Age1);
/*
0: {firstname: 'john', oldage: 30}
1: {firstname: 'peter', oldage: 20}
2: {firstname: 'bob', oldage: 28}
*/
document.body.innerHTML=Age.join('')

// 3- filter : can manipulate the size of new array ,returns based on condition 
const youngPerson=PERSON.filter(function(person){
 return person.age<28;

}
)
console.log(youngPerson)//{name: 'peter', age: 20, position: 'developer'}

//4- find():	Returns the first match ,if no match undefined ,great for getting unique value , return single instance


const FIND=PERSON.find(function(person){
return person.id==1;
});
console.log(FIND)//{name: 'john', age: 30, position: 'designer', id: 1}
console.log(FIND.name)//john

const FIND_Filter=PERSON.filter(function(person){
 return person.id==1;
 });
 console.log(FIND_Filter)//return array
 console.log(FIND_Filter[0].name)//john


//5-reduce():iterates,callback function
// reduces to a single value-number ,array,object
// 1 param ('acc') -total of all calculatios
// 2 param ('curr')- current iteration/value
const peopLe=[
 {name:'john',age:30,position:'designer',id:1,salary:10},
 {name:'peter',age:20,position:'developer',id:2,salary:20},
 {name:'bob',age:28,position:'boss',id:3,salary:30},

]
const Total=peopLe.reduce(function(acc,curr){
 console.log(`total : ${acc}`)
 console.log(`current money : ${curr.salary}`)
 acc+=curr.salary;
 return acc;
},0);
console.log(Total)



// Math

//1-floor : function returns the largest integer less than or equal to a given number.
const NUnmber=Math.floor(5.88)
console.log(NUnmber)//5

//2-ceil:unction always rounds a number up to the next largest integer.
console.log(Math.ceil(6.1))//7

//3-sqrt
console.log(Math.sqrt(9))//3

//4-min
console.log(Math.min(1,3,4,5))//1

//5-max
console.log(Math.max(1,3,4,5))//5

//6-random
console.log(Math.random())//0.9804444501396363


// Date

var months = [
 "January", 
"February", 
"March", 
"April",
 "May", 
 "June",
 "July", 
 "August", 
 "September",
  "October", 
  "November", 
  "December"];
  const days=[
   'Sunday',
   'Monady',
   'tuesday',
   'wednesday',
   'thursday',
   'Friday',
   'saturtday'
  ]

const date =new Date();
console.log(date)//Fri Feb 11 2022 15:29:58 GMT+0200 (Eastern European Standard Time)
console.log(months[date.getMonth()])//February

console.log(days[date.getDay()])//Friday

console.log(date.getFullYear())//2022
 const sentence=`${days[date.getDay()]},${date.getDay()},${months[date.getMonth()]},${date.getFullYear()}`;
 document.body.innerHTML=sentence;//Friday,5,February,2022

