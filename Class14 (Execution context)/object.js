let employee = {
  name : 'Sanidhya',
  age : 18,
  isPresent : true,
  skills : ['HTML', 'CSS', 'JS']
}
console.log(employee)
// Access Properties
console.log(employee.skills)
console.log(employee['age'])

// Modify Properties 
employee.age = 20; // employee['age'] = 20
console.log(employee)

// Add new Property 
employee.gender = 'male' // employee['gender'] = 'male
console.log(employee)

// delete property 
delete employee.isPresent
console.log(employee)
