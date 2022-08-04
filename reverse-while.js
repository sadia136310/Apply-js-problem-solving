
// using factorial by while loop reverse way:::::

function factiralConvert(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
        console.log(i, factorial);
    }
    return factorial;
}

const myFact = factiralConvert(10);
console.log(myFact);