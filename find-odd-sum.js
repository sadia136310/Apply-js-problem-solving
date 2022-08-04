/*
function getSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;

        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return 0;

}
const myNumbers = [12, 65, 45, 78, 32];
getSum(myNumbers);

*/


function sumOfArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
}
function getOddNumbers(numbers) {
    const oddNumbers = []
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 === 1) {
            console.log(index, element);
            oddNumbers.push(element);
        }

    }
    return oddNumbers;

}
const myNumbers = [23, 54, 76, 43, 65, 42, 76, 32];
const oddNumbers = getOddNumbers(myNumbers);
console.log(oddNumbers);
const oddNumberSum = sumOfArray(oddNumbers);
console.log(oddNumberSum);