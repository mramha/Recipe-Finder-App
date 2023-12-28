import React from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import RouterApp from "./components/RouterApp";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <RouterApp />
      </BrowserRouter>
    </div>
  );
};

export default App;
