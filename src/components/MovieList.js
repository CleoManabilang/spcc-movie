// src/components/MovieList.js
import React from 'react';
import Cards from './Cards'; // Import the Card component

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <Cards key={movie.imdbID} movie={movie} onMovieClick={onMovieClick} />
      ))}
    </div>
  );
};

export default MovieList;
