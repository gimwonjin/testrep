import React from "react";
import srcImg from "./assets/pinkbean.jpg";
function Movies({ movie }) {
  const [title, year, medium_cover_img, genres, summary] = movie;
  return (
    <div className="movie">
      <img className="movie-img" src={medium_cover_img} />
      <div>
        <h2 className="movie-title">
          <span>{title}</span>
          <h3 className="movie-year">{year}</h3>
          <p>
            {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
          </p>
          <ul className="movie-genres">
            {genres.map((g) => {
              return <li key={g}>{g}</li>;
            })}
          </ul>
        </h2>
      </div>
    </div>
  );
}

export default Movies;
