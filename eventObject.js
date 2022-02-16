const heading = document.querySelector('h1')
const btn = document.querySelector('.btn')
const link = document.querySelector('#link')

heading.addEventListener('click', (e) => {
  // heading.classList.add('red')
  console.log(e.currentTarget) //reduces human mistakes so it is always pointing to the item seleted in this case heading
  e.currentTarget.classList.add('red')
})

//e.type returns the type of the event addEventListener
link.addEventListener('click', (e) => {
  e.preventDefault() //useful with the form
})

// currentTarget- always refers to the element to which the event handler has been attached to

//target - identifies the element on which the event occured
