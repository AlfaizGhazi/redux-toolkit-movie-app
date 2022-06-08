import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./MovieDetail.scss";
import {
  fetchAsyncMovieOrShow,
  getSelectedMovieOrShow,
} from "../../Features/Movies/movieSlice";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const selectedMovieOrShow = useSelector(getSelectedMovieOrShow);

  React.useEffect(() => {
    dispatch(fetchAsyncMovieOrShow(imdbID));
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">{selectedMovieOrShow.Title}</div>
      </div>
    </div>
  );
};

export default MovieDetail;
