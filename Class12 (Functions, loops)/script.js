function greeting(username){
  // console.log('Good Afternoon, ' + username)
  console.log(`Good Afternoon, ${username}`)
}

let res = greeting('Priyanshi');
console.log(res)

// function that returns sum of two numbers
function sumOfTwo(num1, num2){
  // return (num1 + num2);
  let sum = num1 + num2;
  return sum 
}
console.log(sumOfTwo(10, 40)) // 50 

let ans = sumOfTwo(100, 300)
console.log(ans) // 400

// function that returns product of two numbers
function prdOfTwo(n1, n2){
  return n1*n2
}
console.log(prdOfTwo(4, 25))


// function as expression

let prd = function(n1, n2){
  return n1*n2
}
console.log(prd(10, 20)) // 200
console.log(prd(6, 80)) // 480