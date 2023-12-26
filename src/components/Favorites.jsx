import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Recipe from "./Recipe";
// Other imports...

const Favorites = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [storedFavorites, setStoredFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteRecipes");
    if (storedFavorites) {
      setStoredFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(
      selectedRecipe && selectedRecipe.id === recipe.id ? null : recipe
    );
  };

  const handleDelete = (recipeId) => {
    const updatedFavorites = storedFavorites.filter(
      (recipe) => recipe.id !== recipeId
    );
    setStoredFavorites(updatedFavorites);
    localStorage.setItem("favoriteRecipes", JSON.stringify(updatedFavorites));
    showAlert("Recipe deleted successfully!");
  };

  const showAlert = (message) => {
    alert(message);
  };

  return (
    <div className="container mt-4">
      <h5 className="text-center mb-3">My Favorite Recipes</h5>
      <div className="row">
        {storedFavorites &&
          storedFavorites.map((recipe) => (
            <div key={recipe.id} className="col-md-3 mb-3">
              <box-icon
                name="x"
                class="bx bx-x"
                className="btn btn-danger mt-2"
                onClick={() => handleDelete(recipe.id)}
              ></box-icon>
              <Recipe
                name={recipe.title}
                photoName={recipe.image}
                description={recipe.description}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Favorites;
