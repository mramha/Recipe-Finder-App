import React, { useState } from "react";
import axios from "axios";

import Search from "../../components/search/Search.jsx";
import SuggestedRecipes from "../../components/suggestedRecipes/SuggestedRecipes.jsx";
import Nav from "../../components/navbar/Nav.jsx";

const api = "https://api.spoonacular.com";
const apiKey = "359e1269691c4c79904b676d9c8fc5ba";

const Home = () => {
  const [selectedIngredients, setSelectedIngredients] = useState("");
  const [suggestedRecipes, setSuggestedRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const handleIngredientsChange = async (ingredients) => {
    try {
      const response = await axios.get(`${api}/recipes/findByIngredients`, {
        params: {
          ingredients: ingredients,
          apiKey: apiKey,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = response.data;
      setSuggestedRecipes(data);
      setSelectedIngredients(ingredients);
    } catch (error) {
      console.error(error);
    }
  };

  const addToFavorites = (recipe) => {
    if (!favoriteRecipes.some((favRecipe) => favRecipe.id === recipe.id)) {
      setFavoriteRecipes([...favoriteRecipes, recipe]);
    }
  };

  return (
    <div>
      <Nav />
      <Search onIngredientsChange={handleIngredientsChange} />
      <SuggestedRecipes
        suggestedRecipes={suggestedRecipes}
        addToFavorites={addToFavorites}
      />
    </div>
  );
};

export default Home;
