/**
 * Array Sum Using IIFE
Write an IIFE to calculate the sum of all elements in an array.
const arr = [1, 2, 3, 4, 5];
const sum = // your code
console.log(sum); // Output: 15
 */
const arr = [1, 2, 3, 4, 5];
let sum = (function (array) {
  const newArr = array.reduce((acc, el) => acc + el);
  return newArr;
})(arr); // inchica vor estex ete chenq talis zangvac@ chi ashxatum
console.log(sum);
