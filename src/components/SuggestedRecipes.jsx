// SuggestedRecipes.jsx
import React from "react";
import Recipe from "./Recipe";

const SuggestedRecipes = ({ suggestedRecipes, addToFavorites }) => {
  const handleAddToFavorites = (recipe) => {
    addToFavorites(recipe);
    window.alert(`Added "${recipe.title}" to favorites!`);
  };

  return (
    <div>
      {suggestedRecipes && suggestedRecipes.length > 0 && (
        <div className="container">
          <h4>Suggested Recipes:</h4>
          <div className="row mt-4">
            {suggestedRecipes.map((recipe) => (
              <div key={recipe.id} className="col-md-3 mb-3">
                <Recipe
                  name={recipe.title}
                  photoName={recipe.image}
                  addToFavorites={() => handleAddToFavorites(recipe)}
                  recipe={recipe}
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
