//Task6
//Find Duplicates
//Write a function that finds all duplicates in an array.

const input = [1,2,3,3];
const  findDuplicates = (array) => array.filter((el, idx) => array.indexOf(el) !== idx)
console.log(findDuplicates(input));

// const input = [1,2,3,3,2]
// const output = []
// for (let i = 0; i < input.length; i++){
//   if (i !== input.indexOf(input[i])){
//     output.push(input[i])
//   }
// }
// console.log(output)