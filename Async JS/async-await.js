// async/await
// must have async infront of the function
// await waits till promise is settled either ac or rej doesnot matter
// error handling - try/catch

// async function someFunction (){
//   await
// }
// const otherFunction = async() =>{
//   await
// }

const heading1 = document.querySelector('.one')
const heading2 = document.querySelector('.four') //this one does not exist
const heading3 = document.querySelector('.three')
const btn = document.querySelector('.btn')

btn.addEventListener('click', async () => {
  try {
    await addStyle(1000, heading1, 'red')
    await addStyle(1000, heading2, 'yellow')
    await addStyle(1000, heading3, 'green')
  } catch (error) {
    console.log(error)
  }
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
