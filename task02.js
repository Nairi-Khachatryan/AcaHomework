//Build a simple calculator
//input only Numbers and  this math operations (+, - , *, /)
const calculator = (num1, operation, num2) => {
  let res = "";
  switch (operation) {
    case "+": {
      res = +num1 + +num2;
      break;
    }
    case "-": {
      res = +num1 - +num2;
      break;
    }
    case "*": {
      res = +num1 * +num2;
      break;
    }
    case "/": {
      res = +num1 / +num2;
      break;
    }
    default: {
      res = "invalid operation";
      break;
    }
  }
  if (res === Infinity) {
    res = "Eror, Divison by Zero";
  }
  if (isNaN(res)) {
    return (res = "Only Numbers");
  }
  return res;
};

const res = calculator("2", "*", "2");
console.log(res);
