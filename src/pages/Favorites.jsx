import React from "react";
import Recipe from "../components/recipe/Recipe";
// Assuming Recipe component can also handle displaying favorites

const Favorites = ({ favoriteRecipes }) => {
  return (
    <div>
      {favoriteRecipes.length > 0 && (
        <div className="container justify-content-center align-items-center">
          <h4>Favorite Recipes:</h4>
          <div className="row mt-4">
            {favoriteRecipes.map((recipe) => (
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
  );
};

export default Favorites;
