import React from "react";

const Recipe = ({ name, photoName, addToFavorites }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={photoName} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {/* Add some additional information about the recipe here */}
        </p>
        <button className="btn btn-outline-dark mr-2" onClick={addToFavorites}>
          <box-icon
            name="heart-circle"
            type="solid"
            size="md"
            color="black"
          ></box-icon>{" "}
        </button>
        <button className="btn btn-outline-dark">Read More</button>
      </div>
    </div>
  );
};

export default Recipe;
