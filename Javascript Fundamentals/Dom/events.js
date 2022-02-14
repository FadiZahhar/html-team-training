// select element - const btn = document.querySelector('.btn');
// addEventListener()
// what event, what to do - btn.addEventListener('click', changeStyle);

const btn = document.querySelector('.btn');
const heading2 = document.querySelector('h2');

function changeStyle() {
    heading2.classList.toggle('blue')
    btn.classList.toggle('btn')

}

btn.addEventListener('click', changeStyle);



// click - fires after full action accures
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

const btn = document.querySelector('.btn');
const heading2 = document.querySelector('h2');

function clickBtn() {
    heading2.classList.toggle('blue')
    btn.classList.toggle('btn')
}

function mousedown() {
    heading2.classList.toggle('blue')
    btn.classList.toggle('btn')
    console.log('mousedown');

}

function mouseup() {
    heading2.classList.toggle('blue')
    btn.classList.toggle('btn')
    console.log('mouseup');


}

function mouseenter() {
    heading2.classList.toggle('blue')
    btn.classList.toggle('btn')

}

function mouseleave() {
    heading2.classList.toggle('blue')
    btn.classList.toggle('btn')

}

//btn.addEventListener('click', clickBtn);
btn.addEventListener('mousedown', mousedown);
btn.addEventListener('mouseup', mouseup);
btn.addEventListener('mouseenter', mouseenter);
btn.addEventListener('mouseleave', mouseleave);



// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released


const nameInput = document.querySelector('#name');

function keypress() {
    console.log(nameInput.value);
}

function keydown() {
    console.log('keydown');
}

function keyup() {
    console.log('keyup');
}


nameInput.addEventListener('keypress', keypress);
nameInput.addEventListener('keydown', keydown);
nameInput.addEventListener('keyup', keyup);




// event object argument - e
// info about triggered event
// event.type
// event.currentTarget
// this keywork
// preventDefault() - prevents default behaviour


const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
const link = document.getElementById('link');


function clkHeading(event) {
    event.currentTarget.classList.toggle('blue')
}

heading.addEventListener('click', clkHeading);



btn.addEventListener('click', function (event) {
    //event.currentTarget.classList.toggle('red')
    this.classList.toggle('red')
})

link.addEventListener('click', function (event) {
    event.preventDefault();
})




// currentTarget - always refers to the element to witch the event handler has been attached to 
// target identify the element on witch the event occured

const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        console.log('currentTarget', e.currentTarget);
        console.log('target', e.target);
        e.target.style.color = 'green';

    })
})


// alllows select dynamic element
// event propagation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target

const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(event) {
    console.log('current target', event.currentTarget);
    // console.log('target', event.target);
}

function stopPropagation(event) {
    console.log('you clicked on a list item');
    event.stopPropagation()
}

list.addEventListener('click', showBubbling, { capture: true })
container.addEventListener('click', showBubbling, { capture: true })
document.addEventListener('click', showBubbling, { capture: true })
window.addEventListener('click', showBubbling, { capture: true })




// alllows select dynamic element
const container = document.querySelector('.container');
//const heading = document.querySelector('.heading');
const btn = document.querySelector('.btn');

function sayHello(e) {
    console.log(`hello`);
}

btn.addEventListener('click', function () {
    const element = document.createElement('h1');
    element.innerText = `im an inner element`;
    element.classList.add('heading');
    container.appendChild(element)
})
//heading.addEventListener('click', sayHello)

container.addEventListener('click', function (e) {
    if (e.target.classList.contains('heading')) {
        console.log(`you clicked me`);
    }
})




// submit event listener
// prevent default
// how to get value

const form = document.getElementById('form')
const name = document.getElementById('name')
const password = document.getElementById('password')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(`form submitted`);
    console.log(`name : ${name.value}`);
    console.log(`password: ${password.value}`);

})

