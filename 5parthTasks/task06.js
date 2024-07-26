/**
 * Filter Even Numbers Using IIFE
Write an IIFE to filter out even numbers from an array.
const arr = [1, 2, 3, 4, 5, 6];
const evens = // your code
console.log(evens); // Output: [2, 4, 6]
 */

const arr = [1, 2, 3, 4, 5, 6];
const evens = (function (array) {
  const evenNumsArr = array.filter((el) => el % 2 === 0);
  return evenNumsArr;
})(arr);

console.log(evens);
