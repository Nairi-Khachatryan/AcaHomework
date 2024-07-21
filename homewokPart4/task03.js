//Write a function that merges two arrays in a zipper-like fashion.

const firstInput = [1, 2, 3];
const secondInput = ["a", "b", "c"];

function makeZipperLikeArr(arr1, arr2) {
  const zipperArr = arr1.map((el, idx) => {
    return [el, arr2[idx]];
  });

  return zipperArr;
}
function makeZipperArrFlatten(array) {
  return array.reduce((acc, el) => {
    return acc.concat(el);
  }, []);
}
const zipperArr = makeZipperLikeArr(firstInput, secondInput);
const finalOutput = makeZipperArrFlatten(zipperArr);
console.log(finalOutput);

//indz tvuma animast djvarachrel em es xndir@