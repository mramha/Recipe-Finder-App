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
<<<<<<< HEAD:src/components/search/Search.jsx
      <div className="row justify-content-center align-items-center">
        <div className="col-6">
=======
      <div className="row justify-content-center">
        <div className="col-md-6">
>>>>>>> master:src/components/Search.jsx
          <div className="input-group mt-4">
            <input
              type="search"
              id="search-bar"
              placeholder="Enter your ingredients..."
              className="form-control"
              value={selectedIngredients}
              onChange={handleInputChange}
            />
            <div className="input-group-append">
              <button
<<<<<<< HEAD:src/components/search/Search.jsx
                className="btn btn-success"
=======
                className="btn btn-danger"
>>>>>>> master:src/components/Search.jsx
                type="button"
                onClick={displayRecipes}
              >
                <box-icon name="search-alt" color="#ffffff"></box-icon>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
