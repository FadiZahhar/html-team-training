//promises

//promises can be pending -resolved-rejected

const h1 = document.querySelector('.one')
const h2 = document.querySelector('.two')
const h3 = document.querySelector('.three')
const btn = document.querySelector('.btn')

//the constructor of promise take a callback function which in turns takes 2 functions as parmeters
const promise = new Promise((resolve, reject) => {
  let value = true //this could functionality either get data from server or access geolocation so either we are going to be succesful or fail
  if (value) {
    resolve('value true') // this might be data
  } else {
    reject('error value')
  }
})

promise
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
