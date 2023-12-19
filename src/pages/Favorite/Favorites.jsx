import React, { useState, useEffect } from "react";
import "../favorites/style.css";

const Favorites = ({ favoriteRecipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    // Additional logic can be added here for any side effects
  }, [selectedRecipe]); // Add dependencies as needed

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe.id === selectedRecipe?.id ? null : recipe);
  };

  return (
    <>
      <h5 style={{ textAlign: "center" }}>My Favorite Recipes</h5>
      {favoriteRecipes.map(({ id, title, photoName }) => (
        <div key={id} className="cart-box">
          <div className="cart-img-title">
            <img src={photoName} alt={title} />
            <div className="cart-product-title">{title}</div>
          </div>

          <div
            className="cart-img"
            onClick={() => handleRecipeClick({ id, title, photoName })}
          >
            {selectedRecipe && selectedRecipe.id === id && (
              <div className="selected-recipe-title">{title}</div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Favorites;
