/*
// Imperaritive code
function square(arr){
  let ans = []
  for(let i = 0; i < arr.length; i++){
    ans.push(arr[i]*arr[i])
  }
  return ans;
}
let numbers = [1,2,3,4,5]
let res = square(numbers)
console.log(res)
*/

// Using map()
let numbers = [1,2,3,4,5]
let ans = numbers.map(function(ele){
  return ele*ele
})
console.log(ans)
// Use map() to double every element of the array
// num = [2, 5, 10, 6, 7]
//  ans2 = [4, 10, 20, 12, 14]

let num = [2,5,10,6,7]
let ans2 = num.map(function(ele){
  return ele*2
})
console.log(ans2)
console.log(num)

// arguments of map() => (currEle, currIndex, currArr)
let ans3 = num.map(function(ele, idx, arr){
  console.log(`${ele} is present on ${idx} in ${arr}`)
  return ele*5
})
console.log(ans3)