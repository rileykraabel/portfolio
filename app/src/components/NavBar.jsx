import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <header id="nav-banner">
      <Link to="/" id="nav-home">Riley Kraabel</Link>
      <Link to="/experience" id="nav-link">Experience</Link>
      <Link to="/projects" id="nav-link">Projects</Link>
      <Link to="/contact" id="nav-link">Contact Me!</Link>
    </header>
  );
}

export default NavBar