
//task-4   Age Verification 
//Write a function isAdult(age) that takes an age as input and returns true if the user is an adult 

const isAdult = (age) => {
  if(!isNaN(age)){
    if (+age < 18){
      return false
    }else if (+age >= 18){
      return true
    }
  }else{
   return "Invalid input: Age must be a number"
  }
}
const res = isAdult('wdwd')
console.log(res)