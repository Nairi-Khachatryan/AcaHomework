/**
 * Task 4
  Implement a Combination Sum
  Given a collection of candidate numbers and a target number, find all unique combinations in
  candidates where the candidate numbers sum to target. Each number in candidates may only
  be used once.
*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterEven(data, cb) {
  const evenArr = [];
  for (let value of data) {
    value % 2 === 0 ? evenArr.push(value) : 0;
  }
  return cb(evenArr);
}
function multy(array) {
  const output = [];
  for (let value of array) {
    output.push(value * 2);
  }
  return output;
}
console.log(filterEven(arr, multy));
