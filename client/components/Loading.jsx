import React from "react";

const Loading = ({ a }) => {
  return <div className={a ? "loading loading-center" : "loading"}></div>;
};

export default Loading;
