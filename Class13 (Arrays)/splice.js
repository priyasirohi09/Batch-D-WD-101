let arr = [10, 20, -5, 'bye', -5, true, null, 30]

//delete : -5, bye, -5, true
arr.splice(2, 4);
console.log(arr) //[10, 20, null, 30]

//add elements
let x = arr.splice(2, 0, 'nikunj', 'harshita', true)
console.log(x) //[]
console.log(arr) //[10, 20, 'nikunj', 'harshita', true, null, 30]

//replace elements
let removed = arr.splice(1, 3, 'priyanshi')
console.log(removed) //[20, 'nikunj', 'harshita']
console.log(arr) //[10,'priyanshi', true, null, 30]


