const heading = document.querySelector('h2')
const btn = document.querySelector('.btn')

btn.addEventListener('click', (e) => {
  console.log('you clicked on me')
})
btn.addEventListener('mousedown', (e) => {
  console.log('mousedown')
})
btn.addEventListener('mouseup', (e) => {
  console.log('mouseup')
})

heading.addEventListener('mouseenter', (e) => {
  heading.classList.add('blue')
})
heading.addEventListener('mouseleave', (e) => {
  heading.classList.remove('blue')
})
