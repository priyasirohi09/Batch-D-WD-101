// function that returns sum of all 
// elements of array 
// eg: [1,2,3,4,5,6,7,8,9,10] ans => 55 

/*
function sumOfArr(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum
}
let num = [1,2,3,4,5,6,7,8,9,10]
let ans = sumOfArr(num)
console.log(ans)

*/
// Using reduce()
let num = [1,2,3,4,5]
let ans = num.reduce(function(res, ele){
  console.log(`res : ${res} and  ele : ${ele}`)
  res += ele
  return res
} , 0)
console.log(ans)