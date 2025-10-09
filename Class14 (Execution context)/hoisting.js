greet() // Hello!!
console.log(greet2) //-> undefined
// greet2() // Error: greet2 is not a function
console.log(num) // Cannot access 'num' before initialization

let num = 500 

function greet(){
  console.log('Hello!!')
}

var greet2 = function(){
  console.log('Hello!!')
}
greet2()
// console.log(num)
// greet()
