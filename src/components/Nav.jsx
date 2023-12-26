import React from "react";
import { Link } from "react-router-dom";
import chefsHatImage from "../img/chefs-hat-21086.svg"; // Corrected import statement

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={process.env.PUBLIC_URL + chefsHatImage}
            alt="Cooking Icon"
            style={{ width: "50px", height: "50px" }} // Adjust the width and height accordingly
          />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/favorites">
                Favorites
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
