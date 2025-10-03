let arr = [10, 20, true, 'Hello', null, 100]
console.log(arr) //  [10, 20, true, 'Hello', null, 100]
console.log(arr.length) // 6 

console.log(arr[3]) //  Hello 
console.log(typeof arr[3]) //  string 

console.log( arr[4]) //  null 
console.log( arr[10]) //  undefined 

// Modify elements
 arr[6] = 'New Thing' ; 
 console.log(arr)
 arr[10] = 'Newer Thing' ; 
 console.log(arr) // [10, 20, true, 'Hello', null, 100, 'New Thing', empty × 3, 'Newer Thing']

console.log(arr[8]) // undefined 


let fruits = ['pear', 'apple', 'kiwi', 'melon']
for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

