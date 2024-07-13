<<<<<<< HEAD
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
=======
// Task 5
// Student Gradebook
// Implement functions to:
// ● Add a new student.
// ● Add a grade to a student by ID.
// ● Calculate the average grade of a student by ID.
// ● Find the highest grade of a student by ID.
// ● Find the lowest grade of a student by ID.
// ● Get all students with an average grade above a certain threshold

const students = [
  { name: "Alice", ID: 1, grades: [85, 90, 78] },
  { name: "Bob", ID: 2, grades: [92, 88, 84] },
];

function addStudent(array, name, ID, grades = []) {
  array.push({
    name,
    ID,
    grades,
  });
  return array;
  //zangvachin miqani argument talov inq@ verchnuma menak verjin@
  //baic ete funkciai kanchi jamanak nshum em vor zangvach em uzum poxanchem problem@ anchnuma
  // chem haskanum inchica
}
//>>>>>>
function addGradesByID(array, ID, grades) {
  for (let value of array) {
    if (value.ID === ID) {
      value.grades.push(grades);
      return array;
    }
  }

  return array;
}
//>>>>>>
function averageGradesByID(array, ID) {
  let totalGrades = 0;
  let gradesCount = 0;

  for (let value of array) {
    if (value.ID === ID) {
      for (let grade of value.grades) {
        totalGrades += grade;
        gradesCount++;
      }
    }
  }

  if (gradesCount === 0) {
    return `No student with ID ${ID}`;
  }

  return Math.round(totalGrades / gradesCount);
}
//>>>>>>
function findHigestGradeByID(array, ID) {
  let max = 0;
  for (let value of array) {
    if (value.ID === ID) {
      max = Math.max(...value.grades);
    }
  }
  if (max === 0) {
    return `no student with this ID ${ID}`;
  }
  return max;
}
function findLowestGradeByID(array, ID) {
  let low = 0;
  for (let value of array) {
    if (value.ID === ID) {
      low = Math.min(...value.grades);
    }
  }
  if (low === 0) {
    return `no student with this ID ${ID}`;
  }
  return low;
}
let addStd = addStudent(students, "Nairi", 3, [95, 50]);
let addGradId = addGradesByID(students, 3, 88);
let averageByID = averageGradesByID(students, 3);
let findHigest = findHigestGradeByID(students, 1);
let findLowest = findLowestGradeByID(students, 1);

// const newStd = students.map((el) => {
//   for (let key in el){
//     console.log(el[key])
//   }
// })
// console.log(newStd);
// const averageArr = [];
// function getCurrAverage(array) {
//   let averageCount = 0;
//   let length = array.length;
//   let start = 0;
//   let end = 1;
//   for (let i = 0; i < array.length; i++) {
//     if (i >= start && i < end) {
//       for (let value of array[i].grades) {
//         averageCount += value;
//         start++;
//         end++;
//       }
//     }
   
//   }
//   averageArr.push(+(averageCount / length).toFixed());
//   return averageArr;
// }
// let res = getCurrAverage(students);
// // console.log(res);
// console.log(averageArr);
>>>>>>> 46511a2 (Добавлены новые домашние задания)
