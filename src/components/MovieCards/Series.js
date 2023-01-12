import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../MovieCards/Movies.css";

const Series = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  // console.log("movies",movies)


  useEffect(() => {
    axios
      .get('http://localhost:3001/entries')
      .then(response => {
        // Filter and sort the JSON data
        console.log(response.data)
        const filteredSeries = response.data.filter(series => series.programType === "series" && series.releaseYear >= 2010);
        const sortedSeries = filteredSeries.sort((a, b) => a.title.localeCompare(b.title));
        
        // Set the first 21 entries of the filtered and sorted data
        setSeries(sortedSeries.slice(0, 21));
        // console.log(sortedMovies.slice(0,21)
        setLoading(false);
      })
      .catch(error => {
        setError(true);
        setLoading(false);
      });
  }, []);


  console.log(series)
  return (
    <>
       <div className='text'>
        <h2 className="text-inner">Popular Series</h2>
         </div>
    <div className="movies-container">
      {loading ? (
        <div className="loading-screen">Loading...</div>
      ) : error ? (
        <div className="error-screen">An error has occurred</div>
      ) : (
        <div className="movies-list">
          {series.map(series => (
            <div className="movie-card" key={series.title}>
              <img src={series.images['Poster Art'].url} alt={series.title} />
              {console.log("description",series.images['Poster Art'].url)}
              <h2>{series.title}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default Series;
