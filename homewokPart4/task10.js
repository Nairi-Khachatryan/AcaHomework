/**
 * Task 10
Find Missing Number
Write a function that finds the missing number in an array of consecutive numbers using reduce.
 */
const input = [1, 3, 4, 5, 6];
function findMissingNumber(arr) {
  let last = arr[arr.length - 1];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === last) {
      return `no Missing Numbers`;
    }
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i] + 1;
    }
  }
}
const res = findMissingNumber(input);
console.log(res);
