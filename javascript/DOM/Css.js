//Css
const random1 =document.querySelector('.Random');
// random1.style.fontSize='3rem';
// random1.style.backgroundColor='red'
random1.classList.add('title');

//select element
//addEventListener
//what event,what to do
const btn=document.querySelector('.btn')
const h2=document.querySelector('h2')

btn.addEventListener('click',function(){
 h2.classList.add('red');
})



// call back function 
btn.addEventListener('click',changeColors);

function changeColors(){
 const hasClass=h2.classList.contains('red');
 if(hasClass){
  h2.classList.remove('red');
 }else{
  h2.classList.add('red');

 }
}

//click
//mousedown -button is pressed
//mouseup-button is released
//mouseenter -moved onto an elment
//mouseleave -moved out of an elment

const btn1=document.querySelector('.yellow')
const btn2=document.querySelector('.blue')
const btn3=document.querySelector('.pink')

btn1.addEventListener('mouseup',function(){
 h2.classList.add('yellow');
})
btn2.addEventListener('mouseenter',function(){
 h2.classList.add('blue');
})
btn3.addEventListener('mouseleave',function(){
 h2.classList.add('pink');
})

//keypress -when key is pressed
//keydown -when key is down
//keyup -when key is up

const inputname=document.querySelector('#press')
inputname.addEventListener('keypress',function(){
 console.log('keypress')
})
const inputname1=document.querySelector('#down')
inputname1.addEventListener('keydown',function(){
 console.log('down')
})

const inputname2=document.querySelector('#up')
inputname2.addEventListener('keyup',function(){
 console.log('up')
})


//event
//event.currentTarge--always refers to the element to wich the event handler has been attached to
//event.type
//prevent()--prevents default behaviour
const Event=document.querySelector('.event')
Event.addEventListener('click',function(event){
 event.currentTarget.classList.add('red');
console.log(event.currentTarget)//<button class="event red">Click Me</button>
console.log(event.type)//click
console.log(this)//<button class="event red">Click Me</button>
})
//or
Event.addEventListener('click',event=>{
 console.log(event.currentTarget)
})

//target -identifies the element  on which  the event occured
const btns=document.querySelectorAll('.Btn')
btns.forEach(function(btn){
 btn.addEventListener('click',function(e){
  e.currentTarget.style.color='green';//color of btn chang
  console.log(e.currentTarget)//<button class="Btn" style="color: green;">Second<strong style="color: green;">
  console.log(e.target) //<strong style="color: green;"> button more nested</strong>
  e.target.style.color='green';//just the elment :
 })
})

// allows select dynamic element
// event propagation : order the events are fired
// Propagation means bubbling up to parent elements or capturing down to child elements.
//The stopPropagation() method prevents propagation of the same event from being called.

// event bubbling :clicked element first then bubbles up 

const container=document.querySelector('.container');
const list=document.querySelector('.list-item');
const BTN=document.querySelector('.BTN');

function showBubbiling(event){
 console.log('current target',event.currentTarget)
 console.log(' target',event.target)

 }
function stopPropagation(event){
console.log('you clicked on a list item ')
event.stopPropagation()
}
// list.addEventListener('click',stopPropagation);
list.addEventListener('click',showBubbiling,{capture:true});
container.addEventListener('click',showBubbiling,{capture:true})//
document.addEventListener('click',showBubbiling,{capture:true})
window.addEventListener('click',showBubbiling,{capture:true})


BTN.addEventListener('click',function(){
 const elment=document.createElement('h1');
 elment.classList.add('heading')
 elment.textContent="i'm inside the container";
 container.appendChild(elment)
})
BTN.addEventListener('click',function(e){
 if(e.currentTarget.classList.contains('heading')){
  console.log('hello there ')
 }

})


// submit event listener
// prevent default
// how to get a value 

const form =document.getElementById('form');
const name1=document.getElementById('name');
const password=document.getElementById('password');

form.addEventListener('submit',function(e){
e.preventDefault();
console.log(name1.value)
console.log(password.value)
})

//storing as a string
//LocalStorage.setItem('key','value') keep the info in between  the opening and closing the browser 
//sessionStorage.setItem('key','value') keep the info while  the tab still open

localStorage.setItem('name','john');
localStorage.setItem('name1','john1');
const name_s=localStorage.getItem('name');
console.log(name_s)//john

localStorage.removeItem('name1');

//localStorage.clear()

// storing as an array
//JSON.stringify,JSON.parse
const friend=['john','bon','jad']
const valuess=JSON.parse(localStorage.getItem('friend',JSON.stringify(friend)));
console.log(valuess[0])//john

let fruits ;
if(localStorage.getItem('fruits')){
 fruits=JSON.parse(localStorage.getItem('fruits'));
}else{
fruits=[]
}
console.log(fruits);
fruits.push('apple');
localStorage.setItem('fruits',JSON.stringify(fruits));