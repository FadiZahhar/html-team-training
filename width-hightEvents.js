console.log('hight' + window.innerHeight)

console.log('width' + window.innerWidth)

const box = document.querySelector('div')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
  const values = box.getBoundingClientRect()
  console.log(values)
})

//the resize event will fire when we chage document size

window.addEventListener('resize', () => {
  console.log(window.innerWidth)
})
