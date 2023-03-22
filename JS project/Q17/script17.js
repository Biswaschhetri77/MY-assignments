// Write a program which tells the number of days in a month.
let getDaysInMonth = function(month, year, ){
    return new Date (year, month, 0  ).getDate();
}
console.log(getDaysInMonth(1,2023));
console.log(getDaysInMonth(2,2023));
console.log(getDaysInMonth(3,2023));
console.log(getDaysInMonth(4,2023));
console.log(getDaysInMonth(5,2023));
console.log(getDaysInMonth(6,2023));
console.log(getDaysInMonth(7,2023));
console.log(getDaysInMonth(8,2023));
console.log(getDaysInMonth(9,2023));
console.log(getDaysInMonth(10,2023));
console.log(getDaysInMonth(11,2023));