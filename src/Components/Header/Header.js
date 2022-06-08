import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./Header.scss";

import { user, pnf } from "../../Images";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../Features/Movies/movieSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = React.useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    let whiteSpaceRegex = /^\s*$/;
    if (term.match(whiteSpaceRegex)) {
      alert("Please insert valid information!");
    } else {
      dispatch(fetchAsyncMovies(term));
      dispatch(fetchAsyncShows(term));
      setTerm("");
    }
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to={"/"}>Movie App</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type={"text"}
            value={term}
            placeholder={"Search Movies or Shows"}
            onChange={(event) => setTerm(event.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt={"user"} />
      </div>
    </div>
  );
};

export default Header;
