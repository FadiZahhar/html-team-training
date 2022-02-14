// event listeners

const heading = document.querySelector('h2');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
heading.classList.add('blue');
})

btn.addEventListener('mousedown', function() {
console.log('down');
})

btn.addEventListener('mouseup', function() {
console.log('up');
})

// event object

 const input1 = document.querySelector('#input');
 input1.addEventListener('input', function(event) {
console.log(event.target.value);
 })

//  this keyword

btn.addEventListener('click' , function(event) {
this.classList.add('blue');
})

// submit event listener
// prevent default
// how to get a value

 const form1 = document.getElementById('form');
 const name1 = document.getElementById('text');
 const pass = document.getElementById('password');

 form1.addEventListener('submit' , function(e){
     e.preventDefault();
     document.write(name1.value);
     document.write(pass.value);
 })

//  web storage API
// session storage - local storage

const friends = ['john', 'nour'];
localStorage.setItem('friends', JSON.stringify(friends));
const value2 = JSON.parse(localStorage.getItem('friends'));
console.log(value2[1]);



