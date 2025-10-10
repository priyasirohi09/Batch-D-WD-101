// given an array storing radius of circles 
// 1. create a function that return an array storing areas of all  circles 
// 2. create a function that return an array storing circumference of all  circles 
// 3. create a function that return an array storing diameter of all  circles 

/*
Radii: [2, 4, 6, 8]
Areas: [12.566, 50.265, 113.097, 201.062]
Circumferences: [12.566, 25.132, 37.699, 50.265]
Diameters: [4, 8, 12, 16]

function calculateArea(arr){
  let ans = []
  for(let i = 0; i < arr.length; i++){
    let area = 3.14*arr[i]*arr[i]
    ans.push(area)
  }
  return ans
}
function calculateCircumference(arr){
  let ans = []
  for(let i = 0; i < arr.length; i++){
    let circum = 2* 3.14*arr[i]
    ans.push(circum)
  }
  return ans
}
function calculateDiameter(arr){
  let ans = []
  for(let i = 0; i < arr.length; i++){
    let dia = 2*arr[i]
    ans.push(dia)
  }
  return ans
}

let radius = [2, 4, 6, 8] 
let areaArr = calculateArea(radius)
let circumArr = calculateCircumference(radius)
let diaArr = calculateDiameter(radius)

console.log(areaArr)
console.log(circumArr)
console.log(diaArr)
*/ 

// Usinng Higher Order Function 


function circleDetails(arr, cb){
  let ans = []
  for(let i = 0; i < arr.length; i++){
    let cal = cb(arr[i])
    ans.push(cal)
  }
  return ans
}
function circleArea(r){
  return 3.14*r*r
}
function circleCircumference(r){
  return 2*3.14*r
}
function circleDia(r){
  return 2*r
}
let radius = [2, 4, 6, 8] 
let area = circleDetails(radius, circleArea)
let circum = circleDetails(radius, circleCircumference)
let dia = circleDetails(radius, circleDia)

console.log(area)
console.log(circum)
console.log(dia)

