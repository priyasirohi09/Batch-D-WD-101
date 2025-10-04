let arr = [10, 20, -5, 'bye', -5, true, null, 30]

let arr2 = arr.slice(-4);
console.log(arr2) //[-5, true, null, 30]
let arr3 = arr.slice(-6, -1);
console.log(arr3) //[-5, 'bye', -5, true, null]

/*
let arr2 = arr.slice(2, 7);
console.log(arr2) //[-5, 'bye', -5, true, null]
let arr3 = arr.slice(2, 10);// 
console.log(arr3) // [-5, 'bye', -5, true, null, 30]
let arr4 = arr.slice(2, 6);// 
console.log(arr4) // [-5, 'bye', -5, true]


let newArr = arr.slice(3);
console.log(newArr) //['bye', -5, true, null, 30]
let newArr2 = arr.slice(1);
console.log(newArr2) //[20, -5, 'bye', -5, true, null, 30]
*/