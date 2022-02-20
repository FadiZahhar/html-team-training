//the load event is fired when the whole page has loaded including css, images. in contrest to DOMContentLoaded which is fired as soon as dom is load with out waiting other resourses

//window.addEventListener('load',function)
window.addEventListener('load', () => {
  const img = document.querySelector('img')
  console.log(img.width)
})

//the following will be loaded first but it will not be accurate cz it will not wait for the imag to be loaded it will fire up when DOM is ready and not when resoource are ready
window.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('img')
  console.log(img.width)
})
