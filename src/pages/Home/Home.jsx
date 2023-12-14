import React, { useState } from "react";
import axios from "axios";

import Search from "../../components/search/Search.jsx";
import Favorites from "../../components/favorites/Favorites.jsx";
import SuggestedRecipes from "../../components/suggestedRecipes/SuggestedRecipes.jsx";

const api = "https://api.spoonacular.com";
const apiKey = "359e1269691c4c79904b676d9c8fc5ba";

const Home = () => {
  const [selectedIngredients, setSelectedIngredients] = useState("");
  const [suggestedRecipes, setSuggestedRecipes] = useState([]);

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
      setSelectedIngredients(ingredients); // Update the selectedIngredients state
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Favorites />
      <Search onIngredientsChange={handleIngredientsChange} />
      <SuggestedRecipes suggestedRecipes={suggestedRecipes} />
    </div>
  );
};

export default Home;
