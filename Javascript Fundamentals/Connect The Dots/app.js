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