/**
 * Implement a Kth Largest Element in an Array
Find the Kth largest element in an unsorted array. Note that it is the Kth largest element in
sorted order, not the Kth distinct element.
const arr = [3, 2, 1, 5, 6, 4];
const k = 2;
findKthLargest(arr, k); // Output: 5
 */

const arr = [2, 4, 7, 3, 1];
function findKthLargest(data, k) {
  let findNum = null;
  let bigNum = 0;
  const copyData = [...data];
  let i = 0;
  while (i !== k) {
    bigNum = Math.max(...copyData);
    findNum = copyData.splice(copyData.indexOf(bigNum), 1)[0];
    i++;
  }
  return findNum;
}

console.log(findKthLargest(arr, 1));
//indz tvuma shat canr ashxatox lucuma