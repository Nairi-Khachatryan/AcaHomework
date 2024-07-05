//task1-2
// "Child" if the age is less than 13 
// • "Teen" if the age is between 13 and 19 
// • "Adult" if the age is between 20 and 59 
// • "Senior" if the age is 60 or above 

const checkAge = (arg) =>  arg < 13 ? 'Child' : arg > 13 && arg < 19 ? 'Teen' : arg > 20 && arg < 59 ? 'Adult' : arg > 60 ? 'Senior' : ''
const result = checkAge(5)
console.log(result);