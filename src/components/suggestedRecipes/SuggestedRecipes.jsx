import React from "react";
import Recipe from "../recipe/Recipe";

const SuggestedRecipes = ({ suggestedRecipes, addToFavorites }) => {
  return (
    <div>
      {suggestedRecipes && suggestedRecipes.length > 0 && (
        <div className="container mt-5">
          <h4 className="text-center">Suggested Recipes</h4>
          <div className="row mt-4 justify-content-center">
            {suggestedRecipes.map((recipe) => (
              <div key={recipe.id} className="col-md-4 mb-3">
                <Recipe
                  name={recipe.title}
                  photoName={recipe.image}
                  addToFavorites={() => addToFavorites(recipe)}
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
