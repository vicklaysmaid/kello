import React from "react";

const Talletus = ({ item, clickCallback }) => {
  return <p onClick={(e) => clickCallback(e)}>{item}</p>;
};

export default Talletus;