// SuggestedRecipes.jsx
import React from "react";
<<<<<<< HEAD:src/components/suggestedRecipes/SuggestedRecipes.jsx
import Recipe from "../recipe/Recipe"; // Update the import path based on the actual location
=======
import Recipe from "./Recipe";
>>>>>>> master:src/components/SuggestedRecipes.jsx

const SuggestedRecipes = ({ suggestedRecipes, addToFavorites }) => {
  const handleAddToFavorites = (recipe) => {
    addToFavorites(recipe);
    window.alert(`Added "${recipe.title}" to favorites!`);
  };

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
<<<<<<< HEAD:src/components/suggestedRecipes/SuggestedRecipes.jsx
                  description={recipe.description}
                  onHeartClick={() => addToFavorites(recipe)} // Change prop name to onHeartClick
=======
                  addToFavorites={() => handleAddToFavorites(recipe)}
                  recipe={recipe}
>>>>>>> master:src/components/SuggestedRecipes.jsx
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
