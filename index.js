const initializeDataBase = require("./db/db.connect");

const Movie = require("./models/movies.models");

initializeDataBase();

const newMovie = {
  title: "The Hacker's Journey",
  releaseYear: 2024,
  genre: ["Sci-Fi", "Thriller"],
  director: "Christopher Nolan",
  actors: ["Elliot Page", "Rami Malek", "Tessa Thompson"],
  language: "English",
  country: "USA",
  rating: 8.9,
  plot: "A genius programmer discovers a hidden digital world that connects dreams to reality.",
  awards: "Academy Award for Best Visual Effects",
  posterUrl: "https://example.com/hackers-poster.jpg",
  trailerUrl: "https://example.com/hackers-trailer.mp4",
};

async function createMovie(newMovie) {
  try {
    const movie = new Movie(newMovie);
    const saveMovie = await movie.save();
    console.log("New Movie data:", saveMovie);
  } catch (error) {
    throw error;
  }
}
createMovie(newMovie);
