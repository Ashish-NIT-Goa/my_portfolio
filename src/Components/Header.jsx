/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="nav-bar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#get-in-touch">Contact</a>
    </div>
  );
};

export default Header;
