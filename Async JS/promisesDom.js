const heading1 = document.querySelector('.one')
const heading2 = document.querySelector('.two')
const heading3 = document.querySelector('.three')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  addStyle(1000, heading1, 'red')
    .then(() => addStyle(1000, heading2, 'green'))
    .then(() => addStyle(1000, heading3, 'yellow'))
    .catch((err) => {
      console.log(err)
    })
})
function addStyle(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color
        resolve()
      }, time)
    } else {
      reject(new Error(`There is no such element ${element}`))
    }
  })
}
