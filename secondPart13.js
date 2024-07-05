//task 7

function foo1(num){
  return num % 2 === 0
}
function foo2(num){
  return num > 0
}
let number = -4
let checkNumber = foo1(number) && foo2(number)
//patasxan 
// kstananq false qani vor araji funkcian kta true erkrord@ false && snorhiv kstananq false
console.log(checkNumber);
