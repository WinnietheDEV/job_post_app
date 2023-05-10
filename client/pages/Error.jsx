import React from "react";
import { Link } from "react-router-dom";
import img from "../src/assets/images/not-found.svg";
import Wrapper from "../src/assets/wrappers/ErrorPage";
Link;

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>ohh! page not found</h3>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
