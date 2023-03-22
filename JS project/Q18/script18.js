// Write a program which tells the number of days in a month, now consider leap year.
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
console.log(daysInMonth(2, 2024));// leap year is a year which is divisible by 4