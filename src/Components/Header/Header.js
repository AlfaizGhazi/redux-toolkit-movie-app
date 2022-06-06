import * as React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

import { user, pnf } from "../../Images";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img src={user} alt={"user"} />
      </div>
    </div>
  );
};

export default Header;
