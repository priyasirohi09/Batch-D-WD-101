let arr = [10, 20, -5, 'bye', -5, true, null, 30]
console.log(arr.indexOf(-5)) // 2
console.log(arr.indexOf(true)) // 5
console.log(arr.indexOf(false)) // -1

console.log(arr.includes('hey'))//false
console.log(arr.includes('Bye'))// false
console.log(arr.includes('bye'))// true

let numbers = [10, 30, 60, 80]
let words = ['the', 'is', 'or', 'no', 'yes']
let merged = numbers.concat(words);
console.log(merged); // [10, 30, 60, 80, 'the', 'is', 'or', 'no', 'yes']

let merged2 = words.concat(numbers);
console.log(merged2); //  ['the', 'is', 'or', 'no', 'yes', 10, 30, 60, 80]