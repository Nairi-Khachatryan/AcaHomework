/**
Task 2
Group By Property
Write a function that groups an array of objects by a specific property.
**/

const input = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 22 },
  { name: "Alice", age: 23 },
];

function groupBy(data, name) {
  const outputObj = {};
  outputObj[name] = [];

  const output = data.filter((el) => {
    return el.name === name;
  });
  for (let value of output) {
    outputObj[name].push(value);
  }
  return outputObj;
}
const res = groupBy(input, "Alice");
console.log(res);
//shat hetaqrqir xndira
