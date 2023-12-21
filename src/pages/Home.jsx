// Home.jsx
import React from "react";
import Search from "../components/search/Search";
import SuggestedRecipes from "../components/suggestedRecipes/SuggestedRecipes";

const Home = ({
  selectedIngredients,
  suggestedRecipes,
  handleIngredientsChange,
  addToFavorites,
}) => {
  return (
    <div>
      <Search onIngredientsChange={handleIngredientsChange} />
      <SuggestedRecipes
        suggestedRecipes={suggestedRecipes}
        addToFavorites={addToFavorites}
      />
    </div>
  );
};

export default Home;
