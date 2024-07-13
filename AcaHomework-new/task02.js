
//Task 2
//Create counter function. Default counter number is 0. It should have these methods:

const counter = counterFunction = () => {
  let count = 0;
  const myObj = {
    getCurrentCount: function () {
      console.log(count);
    },
    addCount: function (num) {
      return (count += num);
    },
    subtractCount: function (num) {
      return count -= num;
    },
    resetCount: function () {
      return (count = 0);
    },
  };

  return myObj;
};
/**
 * chaskacha inchica vor eror a talis es greladzevov  ->  counter.getCurrentCount()
 * es hench funkciai popoxakanna baic erb vor talis em urish popoxakani ashxatuma
 */
const res = counterFunction()


