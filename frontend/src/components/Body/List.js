import React from "react";
import Cards from "./Cards.js";

const List = () => {
  return (
    <div className="list">
      <h1>
        <img src="./icons8-circle-12.png" />
        TODO
      </h1>
      <Cards />
    </div>
  );
};

export default List;
