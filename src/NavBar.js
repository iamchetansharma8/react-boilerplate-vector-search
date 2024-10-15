import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; // Add your main CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          ELSER Search
        </Link>
        <ul className="navbar-menu">{/* Remove the list item from here */}</ul>
        <Link to="/" className="navbar-item">
          Home
        </Link>{" "}
        {/* Move Home link here */}
      </div>
    </nav>
  );
};

export default NavBar;
