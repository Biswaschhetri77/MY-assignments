
let age = prompt("Enter your age:");

if (age >= 18) {
  alert("You are old enough to drive.");
} else {
  let yearsToWait = 18 - age;
  alert(`You are too young to drive. Please wait ${yearsToWait} year(s) to turn 18.`);
}
