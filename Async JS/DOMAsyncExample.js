//call back

const h1 = document.querySelector('.one')
const h2 = document.querySelector('.two')
const h3 = document.querySelector('.three')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  setTimeout(() => {
    h1.style.color = 'red'
    setTimeout(() => {
      h2.style.color = 'yellow'
      setTimeout(() => {
        h3.style.color = 'green'
      }, 1000)
    }, 1000)
  }, 1000)
})
