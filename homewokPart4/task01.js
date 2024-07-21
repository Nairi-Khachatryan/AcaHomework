/**
 * Task 1
Array Flattening
Write a function that takes a nested array and returns a flattened array.
 */
const input = [1, [2, [3, [4]], 5]];
function flattenArray(array) {
  const output = [];
  for (let value of array) {
    if (Array.isArray(value)) {
      output.push(...flattenArray(value));
    } else {
      output.push(value);
    }
  }
  return output;
}
const res = flattenArray(input);
console.log(res);
