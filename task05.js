// task -5. BMI Calculator
// Write a function calculateBMI(weight, height) that takes weight (in kg) and height (in meters).

const calculateBMI = (height, weight) => {
  let res = 0;
  if (!isNaN(weight) && !isNaN(height)) {
    if (weight > 0 && height > 0) {
      res = height / (weight * weight);
    } else {
      res = "Only positive Numbers";
    }
  } else {
    res = "Only Numbers";
  }
  return res;
};
const result = calculateBMI(70, 1.75);
console.log(result);
