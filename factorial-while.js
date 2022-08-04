// using factorial by while loop

function factiralConvert(number) {
    let factorial = 1;
    let i = 1
    while (i <= number) {
        factorial = factorial * i;
        i++;
        console.log(i, factorial);
    }
    return factorial;
}

const myFact = factiralConvert(9);
console.log(myFact);