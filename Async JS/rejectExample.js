// callbacks, promises, async/await
const heading1 = document.querySelector('.one')
const heading2 = document.querySelector('.two')
const heading3 = document.querySelector('.three')
const btn = document.querySelector('.btn')
const container = document.querySelector('.img-container')
const url = 'https://picsum.photos/200/300'

btn.addEventListener('click', () => {
  loadImage(url)
    .then((data) => {
      container.appendChild(data)
    })
    .catch((err) => {
      console.log(err)
    })
})
function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.addEventListener('load', () => {
      resolve(img)
    })
    img.addEventListener('error', () => {
      reject(new Error(`Failed to get image from ${url}`))
    })
    img.src = url
  })
}
