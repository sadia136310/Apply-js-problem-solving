
// 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8
// 3! =3*2*1
function factiralMult(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
        console.log(i, factorial);
    }
    return factorial;
}

const myFact = factiralMult(9);
console.log(myFact);


