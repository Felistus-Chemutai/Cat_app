import { useState } from "react";
import React from "react";
import "./index.css";

const Card = ({ CatInfo }) => {
  return (
    <div className="main">
      <p>MY CATS FOLDER</p>
      <div className="container">
        {CatInfo.map((cat) => (
          <div className="cont" key={cat.id}>
            <img src={cat.catImage} alt="" />
            <h1>{cat.country}</h1>
            <p>{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Card;
