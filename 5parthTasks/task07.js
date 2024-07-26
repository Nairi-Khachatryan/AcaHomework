/**
 * Task 7
Reverse String Using IIFE
Write an IIFE to reverse a string.
 */

const word = "hello";

const reversedFunc = (function (str) {
  let copyStr = str;
  return copyStr.split("").reverse().join("");
})(word);
console.log(reversedFunc);
