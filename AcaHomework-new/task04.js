<<<<<<< HEAD

//task-4   Age Verification 
//Write a function isAdult(age) that takes an age as input and returns true if the user is an adult 

const isAdult = (age) => {
  if(!isNaN(age)){
    if (+age < 18){
      return false
    }else if (+age >= 18){
      return true
    }
  }else{
   return "Invalid input: Age must be a number"
  }
}
const res = isAdult('wdwd')
console.log(res)
=======
//Task 4
// Library System
// Implement functions to:
// ● Add a new book.
// ● Borrow a book by ISBN.
// ● Return a book by ISBN.
// ● Find all books by a particular author.
// ● List all available books.
// ● List all borrowed books.
const availableBookArr = [];
const barrowBookArr = [];
const library = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    ISBN: "1234567890",
    status: "available",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    ISBN: "2345678901",
    status: "borrowed",
  },
];

function addBook(arrLibrary, title, author, ISBN, status) {
  arrLibrary.push({
    title,
    author,
    ISBN,
    status,
  });
}
function barrowByISBN(arrLibrary, ISBN) {
  for (let value of arrLibrary) {
    if (value.ISBN === ISBN && value.status !== "borrowed") {
      barrowBookArr.push(value.title);
      value.status = "borrowed";
    }
    if (value.status === "borrowed" && !barrowBookArr.includes(value.title)) {
      barrowBookArr.push(value.title);
    }
    if (value.status === "available") {
      availableBookArr.push(value.title);
    }
  }

  return barrowBookArr;
}

function returnBookByISBN(arrLibrary, ISBN) {
  let idx = 0;
  for (let value of arrLibrary) {
    if (value.ISBN === ISBN) {
      idx = barrowBookArr.indexOf(value.title);
      barrowBookArr.splice(idx, 1);
      value.status = "available";
      availableBookArr.push(value.title)
    }
  }
  return arrLibrary;
}

function findBookBYAuthor(arrLibrary, authorName){
  particularNameBooks = []
  for (let value of arrLibrary){
    if (value.author === authorName){
      particularNameBooks.push(value.title)
    }
  }
  return `author ->  ${authorName}  book-> ${particularNameBooks}, `
}

const availableBook = () => `available -> ${availableBookArr} `
const barrowedBok = () => `barrow ->  ${barrowBookArr} `
  

const res = addBook(library, "Dont Think Alowed", "Nairi", "1234", "available");
result = barrowByISBN(library, "1234567890");
const output = returnBookByISBN(library, "1234567890");
const find = findBookBYAuthor(library, "Harper Lee",)

console.log(library)
console.log(availableBook())
console.log(barrowedBok())
>>>>>>> 46511a2 (Добавлены новые домашние задания)
