import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import axios from "axios";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";

const api = "https://api.spoonacular.com";
const apiKey = "359e1269691c4c79904b676d9c8fc5ba";

const App = () => {
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
    <Router>
      <div className="container">
        <Navbar bg="light" expand="lg" className="mb-4">
          <Navbar.Brand as={Link} to="/">
            Let's Cook!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Favorites">
                Favorites
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route
            path="/"
            element={
              <Home
                selectedIngredients={selectedIngredients}
                suggestedRecipes={suggestedRecipes}
                handleIngredientsChange={handleIngredientsChange}
                addToFavorites={addToFavorites}
              />
            }
          />
          <Route
            path="/Favorites"
            element={<Favorites favoriteRecipes={favoriteRecipes} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
