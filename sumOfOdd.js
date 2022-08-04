// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
function sumOfOdd(numbers) {
    let sum = 0;
    for (i = 1; i <= numbers; i++) {
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
}

sumOfOdd(8);


