import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <Link to="/">
        <legend className="text-success fa fa-text-width pr-5">Movies</legend>
      </Link>
    </nav>
  );
};

export default NavBar;
