import React, { useEffect, useState } from "react";
import Movie from "./Movies,";
import "./Movie.css";
import "./movies.css";
import Movies from "./Movies,";

function MovieApp(props) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`;
  const getMoives = async () => {
    const respone = await fetch(url);
    const data = await respone.json();
    const moviesArr = data.data.movies;
    setMovies(moviesArr);
    setIsLoading(false);
  };
  useEffect(() => {
    getMoives();
  }, []);
  return (
    <div className='container'>
    {isLoading ? (
      <div className='loader'>
        <span>Loading...</span>
      </div>
    ) : (
      <div className='movies'>
        {movies.map((movie) => {
          return <Movies key={movie.id} movie={movie} />;
        })}
      </div>
    )}
  </div>
);
}

export default MovieApp;
