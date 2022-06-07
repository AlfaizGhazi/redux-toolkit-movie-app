import * as React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../Features/Movies/movieSlice";
import { MovieCard } from "../MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);

  const renderMovies = React.useMemo(() => {
    if (movies?.Response === "True") {
      return movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      });
    } else {
      return (
        <div className="movies-error">
          <h3>{movies.Error}</h3>
        </div>
      );
    }
  }, [movies]);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieListing;
