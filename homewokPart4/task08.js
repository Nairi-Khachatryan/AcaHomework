/**
 * Count Occurrences
Write a function that counts the occurrences of each element in an array and returns an object
with the element as the key and the count as the value.
*/
const input = ["apple", "banana", "apple", "orange", "banana", "apple"];
function countOccurrences(array) {
  const myObj = {};
  array.forEach((el) => {
    if (myObj[el]) myObj[el]++;
    else myObj[el] = 1;
  });
  return myObj;
}
const res = countOccurrences(input);
console.log(res);
