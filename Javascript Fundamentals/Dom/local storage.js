// web storage API - provided by browser
// sessionStorage, localStorage
// setItem, getItem, removeItem, clear

localStorage.setItem('name', 'Ali')
sessionStorage.setItem('name', 'Ali')

localStorage.setItem('friend', 'Alaa')
localStorage.setItem('job', 'Front-End developer')
localStorage.setItem('age', '30')

console.log(`name: ${localStorage.getItem('name')}\n
job: ${localStorage.getItem('job')}\n
age: ${localStorage.getItem('age')}\n
friend: ${localStorage.getItem('friend')}\n`);

localStorage.removeItem('age')
localStorage.clear()




// JSON.stringify() , JSON.parse()

const friends = ['Alaa', 'Nour', 'fatima']

localStorage.setItem('friends', JSON.stringify(friends))

const values = JSON.parse(localStorage.getItem('friends'));

console.log(values);

let fruits;

if (localStorage.getItem('fruits')) {
    fruits = JSON.parse(localStorage.getItem('fruits'));
}
else {
    fruits = [];
}
console.log(fruits);
fruits.push('avocado');
fruits.push('pinapple');

localStorage.setItem('fruits', JSON.stringify(fruits))
