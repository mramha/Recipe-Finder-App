<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import SuggestedRecipes from "../components/SuggestedRecipes";
import Nav from "../components/Nav";

const api = "https://api.spoonacular.com";
const apiKey = "359e1269691c4c79904b676d9c8fc5ba";

const Home = () => {
  const [selectedIngredients, setSelectedIngredients] = useState("");
  const [suggestedRecipes, setSuggestedRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteRecipes");
    if (storedFavorites) {
      setFavoriteRecipes(JSON.parse(storedFavorites));
    }
  }, []);

  const handleIngredientsChange = async (ingredients) => {
    try {
      setLoading(true);
      setError(null);

      if (!apiKey) {
        throw new Error("API key is missing. Please provide a valid API key.");
      }

      const response = await axios.get(`${api}/recipes/findByIngredients`, {
        params: {
          ingredients,
          apiKey,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = response.data;
      setSuggestedRecipes(data);
      setSelectedIngredients(ingredients);
    } catch (error) {
      setError(error.message || "An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = (recipe) => {
    if (!favoriteRecipes.some((favRecipe) => favRecipe.id === recipe.id)) {
      const updatedFavorites = [...favoriteRecipes, recipe];
      setFavoriteRecipes(updatedFavorites);

      localStorage.setItem("favoriteRecipes", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div>
      <Nav />
      <Search onIngredientsChange={handleIngredientsChange} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
>>>>>>> master
      <SuggestedRecipes
        suggestedRecipes={suggestedRecipes}
        addToFavorites={addToFavorites}
      />
    </div>
  );
};

export default Home;
