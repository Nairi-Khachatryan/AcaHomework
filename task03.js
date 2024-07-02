//Convert Temperature 
// Write a function convertTemperature(value, scale) that converts the temperature value to 
// the specified scale ('C' for Celsius, 'F' for Fahrenheit). The input value can be a string or a number.
const tempConverter = (value, scale) => {
  let res = 0;
  if (scale === 'C') {
    res = (value * 9 / 5) + 32; 
  } else if (scale === 'F') {
    res = (value - 32) * 5 / 9; 
  } else {
    return "Invalid scale";
  }
  return res;
};

const result = tempConverter(100, 'F')
console.log(result)