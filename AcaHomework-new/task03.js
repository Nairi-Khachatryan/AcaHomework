<<<<<<< HEAD
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
=======
/**
                    * Task 3
    Movie Database
    Implement functions to:
    ● Add a new movie.
    ● Find movies by a particular director.
    ● Find movies released in a particular year.
    ● Get all movies of a particular genre.
    ● Sort movies by title, director, or release year.
    ● Remove a movie by title.
 */

const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genres: ["Sci-Fi", "Action"],
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genres: ["Action", "Crime"],
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    genres: ["Sci-Fi", "Drama"],
  },
];

const movieDatabase = (array) => {
  myObj = {
    addMovie(movie) {
      array.push({ title: movie });
    },
    findMovie: function (dirName) {
      let res = ``;
      for (let value of array) {
        if (value.director === dirName) {
          res += `Film = ${value.title}, `;
        }
      }
      return res;
    },
    findByYear: function (year) {
      let res = "";
      for (let value of array) {
        if (value.year === year) {
          res += value.title;
        }
      }
      return res;
    },
    getMoviesByGenre: function (genre) {
      let res = "";
      for (let value of array) {
        for (let newVal of value.genres) {
          if (newVal === genre) {
            res += `${value.title}, `;
          }
        }
      }
      return res;
    },
    removeMovieByTitle: function (title) {
      let idx = null
      for (let value of array){
        if (value.title === title){
          idx = array.indexOf(value)
          array.splice(idx, 1)
        }
      }
      
    },
  };
  return myObj;
};

const res = movieDatabase(movies)
res.removeMovieByTitle('Interstwdwdellar')
console.log(movies)
//chkaroxacha sort anel filmer@
>>>>>>> 46511a2 (Добавлены новые домашние задания)
