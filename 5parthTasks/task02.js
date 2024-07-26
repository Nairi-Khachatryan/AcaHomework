/**
 * mplement a Majority Element Finder
Given an array of size n, find the majority element. The majority element is the element that
appears more than ⌊n / 2⌋ times.
 */


const arr = [5,4,3,5]
function findMajorityElement(array) {
  let length = array.length / 2;
  const counts = {};
  for (let num of array) {
    if (!counts[num]) {
      counts[num] = 1;
    } else {
      counts[num]++;
      console.log(counts)
    }
    if (counts[num] >= length) {
      return num;
    }
  }
  return `Majority Element not found`;
}
const res = findMajorityElement(arr)
console.log(res);