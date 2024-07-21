//Task 9
//Calculate Factorial
//Write a function that calculates the factorial of a number using reduce.


function factorial(num) {
  const arr = []
  for(let i = 1; i <= num; i++){
    arr.push(i)
  }
  return arr.reduce((acc, el) => acc *= el)
}
const res = factorial(5)
console.log(res);