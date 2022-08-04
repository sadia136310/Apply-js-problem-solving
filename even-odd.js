/* 
function even_odd(number) {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }

}
const inputNumber = even_odd(98);
console.log(inputNumber);

const inputNumber2 = even_odd(123);
console.log(inputNumber2);
*/

function even_odd(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }

}
const inputNumber = even_odd(98);
console.log(inputNumber);

const inputNumber2 = even_odd(123);
console.log(inputNumber2);