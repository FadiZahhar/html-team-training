const toggle =  document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
console.log(links);

toggle.addEventListener('click', function(){
links.classList.toggle('show-links');
})

