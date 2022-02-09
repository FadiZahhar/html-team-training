//object
const person = {
    name: 'Ali',
    age: 30,
    married: false,
    friends: ['fady', 'fatima', 'nour', 'rayan', 'lamies', 'lora', 'anthony'],
    //greeting(){}  or 
    greeting: function () {
        console.log("Hello from " + this.name);
        return 2;
    }
}
const val = person.greeting()
console.log(val);