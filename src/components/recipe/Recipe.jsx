import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({ name, photoName, description, onHeartClick, recipeId }) => {
  return (
    <div className="card">
      <img src={photoName} className="card-img-top" alt={name} />
      <div className="card-body d-flex justify-content-between align-items-center">
        <div className=" row  col-6 d-flex gap-2">
          <h5 className="card-title">{name.slice(0, 10)}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className=" row  col-5 d-flex gap-2">
          <Link className="btn btn-success">More...</Link>
          <button className="btn btn-outline-warning" onClick={onHeartClick}>
            <i className="bi bi-heart"></i> 🤍
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
