//  reverse factorial


function reverseFactorial(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
        console.log(i, factorial);
    }
    return factorial;
}

const myFact = reverseFactorial(9);
console.log(myFact);

