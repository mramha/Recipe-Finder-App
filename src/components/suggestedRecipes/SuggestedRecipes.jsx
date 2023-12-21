// SuggestedRecipes.jsx
import React from "react";
import Recipe from "../recipe/Recipe"; // Update the import path based on the actual location

const SuggestedRecipes = ({ suggestedRecipes, addToFavorites }) => {
  return (
    <div>
      {suggestedRecipes.length > 0 && (
        <div className="container">
          <h4>Suggested Recipes:</h4>
          <div className="row mt-4">
            {suggestedRecipes.map((recipe) => (
              <div key={recipe.id} className="col-md-3 mb-3">
                <Recipe
                  name={recipe.title}
                  photoName={recipe.image}
                  description={recipe.description}
                  onHeartClick={() => addToFavorites(recipe)} // Change prop name to onHeartClick
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SuggestedRecipes;
