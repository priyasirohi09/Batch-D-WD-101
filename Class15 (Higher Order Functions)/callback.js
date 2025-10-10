function printDetails(cb1, cb2, cb3){
  console.log('Anmol') 
  cb1();
  cb2();
  cb3();
}
function printLastName(){
console.log('Sandhu')
}
function printAge(){
  console.log(18)
}
function printAdress(){
  console.log('Raipur')
}
printDetails(printLastName, printAge, printAdress)