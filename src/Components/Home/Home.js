import * as React from "react";
import { useDispatch } from "react-redux";
import "./Home.scss";

import movieApi from "../../Common/API/movieApi";
import { API_KEY } from "../../Common/API/movieApiKey";
import { MovieListing } from "../../Components";
import { addMovies } from "../../Features/Movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${API_KEY}&s=${movieText}&type=movie`)
        .catch((error) => {
          console.log("Error: ", error);
        });
      // console.log("Response: ", response);
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
