//math functions
const number = 4.365215
console.log('get integer: ' + Math.floor(number))
console.log('round up: ' + Math.ceil(number))
console.log('square root :' + Math.sqrt(9))
console.log('pi :' + Math.PI)
console.log('minimum number : ' + Math.min(5, 9, 7, 2, 1))
console.log('max number : ' + Math.max(5, 9, 7, 2, 1))
console.log('random numbers betwen 0 and 1 exluded: ' + Math.random())
console.log(
  'random numbers betwen 1 and 10 excluded : ' + Math.floor(Math.random() * 10)
)
console.log(
  'random numbers betwen 1 and 10 included :' + Math.ceil(Math.random() * 10)
)

//Date and time

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const date = new Date()
const sentenc = `${days[date.getDay()]}, ${date.getDate()}, ${
  month[date.getMonth()]
} ${date.getFullYear()} `

document.footer.innerHTML = sentenc
console.log(sentenc)
