import React, { useState } from "react";
import "boxicons";
import "bootstrap/dist/css/bootstrap.min.css";
import Recipe from "../recipe/Recipe";

const api = "https://api.spoonacular.com";
const apiKey = "359e1269691c4c79904b676d9c8fc5ba";

const Search = () => {
  const [suggestedRecipes, setSuggestedRecipes] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState("");

  const displayRecipes = async () => {
    try {
      const response = await fetch(
        `${api}/recipes/findByIngredients?ingredients=${selectedIngredients}&apiKey=${apiKey}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setSuggestedRecipes(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setSelectedIngredients(event.target.value);
  };

  return (
    <div className="container">
      <div className=" justify-content-center align-items-center flex-column">
        <h3 className="form-label mt-4" htmlFor="form">
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
        {suggestedRecipes.length > 0 && (
          <div className="mt-5">
            <h4>Suggested Recipes:</h4>
            <div className="row mt-4">
              {suggestedRecipes.map((recipe) => (
                <div key={recipe.id} className="col-md-3 mb-3">
                  <Recipe
                    name={recipe.title}
                    photoName={recipe.image}
                    description={recipe.description}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
