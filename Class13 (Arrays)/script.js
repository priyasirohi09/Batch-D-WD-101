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

// split()
let str = 'hello world, good afternoon'
let arr2 = str.split('o')
console.log(arr2)//['hell', ' w', 'rld, g', '', 'd aftern', '', 'n'

let str2 = 'hello'
let arr3 = str2.split('')
console.log(arr3) // ['h', 'e', 'l', 'l', 'o']

arr3.reverse();
console.log(arr3) // ['o', 'l', 'l', 'e', 'h']

let join1 = arr3.join()
console.log(join1) //o,l,l,e,h
let join2 = arr3.join(' ')
console.log(join2) //o l l e h
let join3 = arr3.join('')
console.log(join3) // olleh


function reverseString(str){
  // return str.split('').reverse().join('')
  let arr = str.split('')
  arr.reverse();
  return arr.join('')
}
console.log(reverseString('apple')) //elppa


