/*function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}
const myYear = isLeapYear(1933);
console.log(myYear);
*/


// if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400))

function isLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
}
const myYear = isLeapYear(3300);
console.log(myYear);