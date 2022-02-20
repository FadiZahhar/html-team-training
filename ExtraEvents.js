window.addEventListener('DOMContentLoaded', () => {
  const heading = document.querySelector('h1')
  console.log(heading)
  heading.style.color = 'red'
})

//even if we placed the script link in the heading in the html and not in the end the code will not break cz we are waiting for the dom to be loaded and then apply the styling
