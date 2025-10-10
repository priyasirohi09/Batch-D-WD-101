// Function that return even numbers
//  in a new Array
// num = [11, 22, 7, 46, 3827, 274, 100]
// ans = [22, 46, 274, 100]

/*
function evenNumbers(arr){
  let ans = []
  for(let i = 0; i< arr.length; i++){
    if(arr[i] % 2 == 0){
      ans.push(arr[i])
    }
  }
  return ans
}
let num = [11, 22, 7, 46, 3827, 274, 100]
let res = evenNumbers(num)
console.log(res)

//Using filter()

let num = [11, 22, 7, 46, 3827, 274, 100]
let res = num.filter(function(ele){
  return ele%2 == 0
})
console.log(res)

// Given an array of strings, return only those
//  with more than 4 characters. 
let words = ["sun", "apple", "car", "banana"];
let ans = words.filter(function(ele){
  return ele.length > 4
})
console.log(ans)
*/

// Given an array, return elements present at even indexes 
//  num = [11, 22, 7, 46, 3827, 274, 100]
// ans = [11, 7, 3827, 100]

let num = [11, 22, 7, 46, 3827, 274, 100]
let ans = num.filter(function(ele, idx){
  return idx%2 == 0;
})
console.log(ans)

let ans2 = num.map(function(ele, idx){
  return idx%2 == 0;
})
console.log(ans2) 
// [true, false, true, false, true, false, true]