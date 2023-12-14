import React, { useState } from "react";

const Search = ({ onIngredientsChange }) => {
  const [selectedIngredients, setSelectedIngredients] = useState("");

  const handleInputChange = (event) => {
    setSelectedIngredients(event.target.value);
  };

  const displayRecipes = () => {
    onIngredientsChange(selectedIngredients);
  };

  return (
    <div className="container">
      <div className=" justify-content-center align-items-center flex-column">
        <h3 className="form-label mt-1" htmlFor="form">
          Let's Cook 🍽
        </h3>
        <div className="input-group mt-2 ">
          <input
            type="search"
            id="search-bar"
            placeholder="Enter your ingredients..."
            className="form-control "
            value={selectedIngredients}
            onChange={handleInputChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={displayRecipes}
            >
              <box-icon name="search-alt" color="#ffffff"></box-icon>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
