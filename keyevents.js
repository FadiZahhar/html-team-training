//key events are usually with inputs

const input = document.getElementById('name')

input.addEventListener('keypress', (e) => {
  console.log('you pressed a key')
})

input.addEventListener('keydown', (e) => {
  console.log('keydown')
})

input.addEventListener('keyup', (e) => {
  console.log('keyup')
  console.dir(input) //see all methods
  console.log(input.value)
})
