//Task 5
//Intersection of Arrays
//Write a function that returns the intersection of two arrays.

const firstArr = [1, 2, 3, 4, 5];
const secondArr = [2, 3, 4, 5, 6];
function arrayIntersection(arr1, arr2) {
  const outputArr = [];
  for (let value of arr1) {
    if (arr2.includes(value)) {
      outputArr.push(value);
    }
  }
  return outputArr;
}

const res = arrayIntersection(firstArr, secondArr);
console.log(res);
