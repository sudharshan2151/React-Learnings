import React from "react";
import styles from "./MovieCard.module.css"
const MovieCard = ({title,year,imdbID,type,rating,poster,id}) => {
  return <div data-testid="movie-card" className={styles.container}>
      <div>
        <img src={poster} alt={title} />
      </div>
      <div>
        <h2>{title}</h2>
        <h4>year: {year}</h4>
        <h6>ID: {imdbID}</h6>
        <p>Type: {type}</p>
        <p>Rating: {rating}</p>
      </div>
  </div>;
};

export default MovieCard;
