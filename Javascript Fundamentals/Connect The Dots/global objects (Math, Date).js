// Math
// standart build-in objects - always availble

const number = 4.56789
// floor : round down
const result1 = Math.floor(number)
console.log(result1);

// ceil : round up
const result2 = Math.ceil(number)
console.log(result2);

// sqrt : square-root
const result3 = Math.sqrt(number)
console.log(result3);

// PI : value of PI
const result4 = Math.PI;
console.log(result4);

// min : minimum value 
const result5 = Math.min(0, -5, 18, 35, -96)
console.log(result5);

// max : maximum value
const result6 = Math.max(0, -5, 18, 35, -96)
console.log(result6);

// random: random random between 0 and 0.999999 (1-)
const result7 = Math.random()
console.log(result7);

// to get int random between 0 and X
// Math.floor(Math.random() * X) + 1
const result8 = Math.floor(Math.random() * 10) + 1
console.log(result8);




// Date

const monthNames = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const date = new Date() // full date
console.log(date);

const month = date.getMonth() // month index [0 .. 11]
console.log(monthNames[month]);

const day = date.getDay() // day index [0 .. 6]
console.log(dayNames[day]);

const current_date = date.getDate() // date index [0 .. 31]
console.log(current_date);

const year = date.getFullYear() // year
console.log(year);

const sentence = `${dayNames[day]}, ${date.getDate()} ${monthNames[month]} ${date.getFullYear()}.`

console.log(sentence);
const newDate = new Date('3/20/2021'); // month-day-year

document.body.innerHTML = ([`<h1>${sentence}</h1>`, `<h3>${newDate}</h3>`]).join('');