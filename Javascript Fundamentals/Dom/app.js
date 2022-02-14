
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
