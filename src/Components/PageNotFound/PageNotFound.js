import * as React from "react";
import "./PageNotFound.scss";

import { pnf } from "../../Images";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      {/* <h1>PageNotFound</h1> */}
      <img src={pnf} alt={"page-not-found"} />
    </div>
  );
};

export default PageNotFound;
