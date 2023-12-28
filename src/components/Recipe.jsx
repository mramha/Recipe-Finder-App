import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({ name, photoName, addToFavorites, recipe }) => {
  return (
    <div className="card">
      <img src={photoName} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            addToFavorites(recipe);
          }}
          className="btn btn-outline-danger"
        >
          Add To Favorites
        </a>
        <Link to={`/recipe/${recipe?.id}`} className="btn">
          More...
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
