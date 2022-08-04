// ১.leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।

/* function leapYear(year) {
    if (year % 2 == 0) {
        return true;
    }
    return false;

}
const nextYear = leapYear(2023);
console.log('Next year is ', nextYear);
*/


// ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

/* function ageCheck(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const myAge = ageCheck(24);
console.log('my current age is ', myAge);

*/


// ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে। 

/* function convertHourToMin(hour) {
    const result = hour * 60;
    return result;
}
const minutes = convertHourToMin(2);
console.log('min is', minutes);
*/

// ৪. মনে করো তোমার ৪ ঘণ্টা লাগবে ঢাকাই পোঁছতে। তুমি এখন এ ভ্যালু ৪ কে একটা ফাংশনে পাঠাবা এবং সে ফাংশন ভেলু ৪ কে second এ convert করে তোমাকে রিটার্ন করবে।

function convertHourToSecond(hour) {
    const result = hour * (60 * 60);
    return result;
}
const second = convertHourToSecond(4);
console.log('min is', second)