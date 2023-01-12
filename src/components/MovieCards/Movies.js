import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../MovieCards/Movies.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  // console.log("movies",movies)


  useEffect(() => {
    axios
      .get('http://localhost:3001/entries')
      .then(response => {
        // Filter and sort the JSON data
        const filteredMovies = response.data.filter(movie => movie.programType === 'movie' && movie.releaseYear >= 2010);
        const sortedMovies = filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
        
        // Set the first 21 entries of the filtered and sorted data
        setMovies(sortedMovies.slice(0, 21));
        // console.log(sortedMovies.slice(0,21)
        setLoading(false);
      })
      .catch(error => {
        setError(true);
        setLoading(false);
      });
  }, []);


  console.log(movies)
  return (
    <>
          
         <div className='text'>
        <h2 className="text-inner">Popular Movies</h2>
         </div>
    <div className="movies-container">
      {loading ? (
        <div className="loading-screen">Loading...</div>
      ) : error ? (
        <div className="error-screen">An error has occurred</div>
      ) : (
        <div className="movies-list">
         
          {movies.map(movie => (
            <div className="movie-card" key={movie.title}>
              <img src={movie.images['Poster Art'].url} alt={movie.title} />
              {console.log("description",movie.images['Poster Art'].url)}
              <h2>{movie.title}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default Movies;
