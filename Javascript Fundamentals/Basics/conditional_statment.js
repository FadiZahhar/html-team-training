// conditional statment
// < , > , >= , <= , == , === , != , !==
// if   else if   else  !
// == check value   === check value and type

// const num1 = 17;
// const num2 = 17;

// if (num1 > num2) {
//     console.log(num1 + " bigger than " + num2);
// }
// else if (num2 > num1) {
//     console.log(num2 + " bigger than " + num1);
// }
// else {
//     console.log(num1 + " equal to " + num2);
// }

num1 = 10;
num2 = '10';
num3 = 20;
num4 = 20;
const validation = function (number1, number2) {
    if (number1 == number2) {
        console.log('first number and second one are equal')
    }
    else if (number1 != number2) {
        console.log('first number and second one are not equal')
    }

    if (number1 === number2) {
        console.log('first number and second one having the same type')
    }
    else if (number1 !== number2) {
        console.log('first number and second one are from different type')
    }
}

validation(num1, num2)
validation(num3, num4)
