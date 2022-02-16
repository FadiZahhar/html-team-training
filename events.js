const btn = document.querySelector('.btn')
const heading = document.querySelector('h2')

//clickevent
// btn.addEventListener('click', (e) => {
//   heading.classList.add('red')
// })

// //function referance
function changecolors() {
  let hasclass = heading.classList.contains('red')
  if (hasclass) heading.classList.remove('red')
  else heading.classList.add('red')
}

btn.addEventListener('click', changecolors)
