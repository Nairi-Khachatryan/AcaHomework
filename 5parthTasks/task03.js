/**
 * Implement an Anagram Grouping
   Given an array of strings, group anagrams together.
 */

// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// function groupAnagrams(str) {
//   const copyStrs = [...str];

//   copyStrs.forEach((value, index, array) => {
//     array[index] = value
//       .split("")
//       .sort((a, b) => {
//         return a.localeCompare(b);
//       })
//       .join("");
//   });
//   return copyStrs;
// }
// const res = groupAnagrams(strs);

// const myObj = {};
// for (let value of res) {
//   if (!myObj[value]) {
//     myObj[value] = 1;
//   } else {
//     myObj[value]++;
//   }
// }
// const finalOutput = [];
// for (let key in myObj) {
//    finalOutput.push([key.repeat(myObj[key])])
// }
// console.log(finalOutput);

//------------------------------------>>>>>>>>>
//es verevi masum im grach glxacavanqna u heriq chi chi ashxatum hl@ mihatel kardaluch glxacava berum)))

//esel GPT qani vor arten chgitei inch nor ban mtacei

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnagrams(strs) {
  const groups = {};

  strs.forEach((str) => {
    const sortedStr = str.split("").sort().join("");

    if (groups[sortedStr]) {
      groups[sortedStr].push(str);
    } else {
      groups[sortedStr] = [str];
    }
  });

  return Object.values(groups);
}

const res = groupAnagrams(strs);
console.log(res);
