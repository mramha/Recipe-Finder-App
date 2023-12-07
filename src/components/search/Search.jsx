import React from "react";
import "./style.css";
import "boxicons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Search = () => {
  return (
    <div class="container">
      <div class="col-12 d-flex justify-content-center align-items-center flex-column">
        <h3 class="form-label mt-4" for="form">
          Let's Cooking 🍽
        </h3>
        <input
          type="search"
          id="search-bar"
          placeholder="Enter your ingredients..."
          class="form-control mt-2 col-6"
          style={{ width: "50%" }}
        />
      </div>
    </div>
  );
};

export default Search;
