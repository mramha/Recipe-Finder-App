import React from "react";
import { Navbar, Nav as BootstrapNav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => <div>Home Component</div>;
const Features = () => <div>Features Component</div>;
const Pricing = () => <div>Pricing Component</div>;

const Nav = () => {
  return (
    <Router>
      <div className="container">
        <Navbar expand="lg" bg="light" variant="light">
          <Navbar.Brand as={Link} to="/">
            Navbar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavDropdown" />
          <Navbar.Collapse id="navbarNavDropdown">
            <BootstrapNav className="mr-auto">
              <BootstrapNav.Link as={Link} to="/">
                Home
              </BootstrapNav.Link>
              <BootstrapNav.Link
                as={Link}
                to="../../pages/Favorite/Favorites.jsx"
              >
                Favorite
              </BootstrapNav.Link>
              <BootstrapNav.Link as={Link} to="/pricing">
                Pricing
              </BootstrapNav.Link>
            </BootstrapNav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Nav;
