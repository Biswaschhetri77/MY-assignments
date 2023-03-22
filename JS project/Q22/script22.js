/* The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method */
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
console.log(Math.max(...ages));
console.log(Math.min(...ages));

let arr = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
arr.sort((a, b) => a - b)
let median;
if (arr.length%2 !=0){
    let middleIndex = Math.floor(arr.length/2)
    median = arr[middleIndex]
}else{
    let middleIndex = Math.floor(arr.length/2)
    median = (arr[middleIndex] + arr[middleIndex - 1])/2
}
console.log(median);

// AVerage

let num = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sum = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

const average = sum/num.length;
console.log(average);
console.log(Math.max(...num));
console.log(Math.min(...num));
const range = max - min
console.log(range);


// Range 
// let arrs = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// const range = arrs => {
//     arrs.sort((a, b) => a-b);
//     return [arrs[0], arrs[arrs.length - 1 ]];
// };
// console.log(arrs);

const diff1  = Math.abs(min - average);
const diff2 = Math.abs(max - average);

console.log(diff1);
console.log(diff2);
