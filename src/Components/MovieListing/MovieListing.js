import * as React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../Features/Movies/movieSlice";
import { MovieCard } from "../MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

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

  const renderShows = React.useMemo(() => {
    if (shows?.Response === "True") {
      return shows.Search.map((show, index) => {
        return <MovieCard key={index} data={show} />;
      });
    } else {
      return (
        <div className="shows-error">
          <h3>{shows.Error}</h3>
        </div>
      );
    }
  }, [shows]);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>

      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
