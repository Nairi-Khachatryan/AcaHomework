

//Count the Letters and Digits

const input = " qwert 123 ";
const countAll = (word) => {
  let letters = 0;
  let digits = 0;
  let res = word.replace(/\s+/g, "");
  for (let value of res) {
    if (!isNaN(value)) {
      digits++;
    } else {
      letters++;
    }
  }
  return `leters = ${letters} digits = ${digits}`;
};
const result = countAll(input);
console.log(result);

