//1. Write a function that will take hour as the input parameter and will convert it into minutes and will return the result in minutes.

/*
function convertHourToMin(hour) {
    const result = hour * 60;
    return result;
}
const minutes = convertHourToMin(2);
console.log('min is', minutes);
*/


// Write a function findOddSum() that will take the array[5, 7, 8, 10, 45, 30]
// as the input parameter and will return the sum of the odd numbers.

/*function findOddSum(numbers) {
   let sum = 0;
   for (let i = 0; i < numbers.length; i++) {
       const index = i;
       const element = numbers[index];
       sum = sum + element
       // console.log(index, element, sum);
   }

   return sum;

}
const myNumbers = [5, 7, 8, 10, 45, 30]
const sumIs = findOddSum(myNumbers);
console.log(sumIs);
*/



// Write a function findLeapYear() that will take the array
// [2023, 2024, 2025, 2028, 2030] as the input parameter and will check if
// each year is a leap year.If a year is a leap year insert that year in a
// new array, return the new array and print the result.


function findLeapYear(years) {
    const newLeapYears = [];
    for (let i = 0; i < years.length; i++) {
        const index = i;
        const element = years[index];
        if ((element % 4 == 0) && (element % 100 != 0) || (element % 400 == 0)) {
            console.log(index, element);
            newLeapYears.push(element);

        }

    }
    return newLeapYears;
}
const years = [2023, 2024, 2025, 2028, 2030];
const leapYears = findLeapYear(years);
console.log('Final leap years are ', leapYears);