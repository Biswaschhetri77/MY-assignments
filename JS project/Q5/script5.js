// Declare a variable and assign string value to it and split it into an array using split method
const names = ['tom','harry','Dick'];
names.splice(2,0, 'Ram',);
console.log(names);



const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]
