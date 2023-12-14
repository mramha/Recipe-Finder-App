import React from "react";
import Recipe from "../recipe/Recipe";

const SuggestedRecipes = ({ suggestedRecipes }) => {
  return (
    <div>
      {suggestedRecipes.length > 0 && (
        <div className=" container justify-content-center align-items-center mt-5">
          <h4>Suggested Recipes:</h4>
          <div className=" row mt-4 ">
            {suggestedRecipes.map((recipe) => (
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

export default SuggestedRecipes;
