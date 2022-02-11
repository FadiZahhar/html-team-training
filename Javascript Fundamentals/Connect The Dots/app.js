// reduce
// iterates, callback functions
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculation
// 2 parameter ('curr') - current iteration/value


const people = [
    { name: 'Alaa', age: 32, position: 'Doctor', id: 1, salary: 2000 }
    ,
    { name: 'Ali', age: 30, position: 'Full Stack Developer', id: 1, salary: 2500 },
    { name: 'Nour', age: 25, position: 'Front-End Developer', id: 2, salary: 1560 },
    { name: 'Fatima', age: 23, position: 'Front-End Developer', id: 3, salary: 1560 }
]

const total = people.reduce(function (acc, curr) {
    console.log(`total :${acc}`);
    console.log(`current :${curr.salary}`);
    acc += curr.salary;
    return acc;
}, 0)

console.log(total);