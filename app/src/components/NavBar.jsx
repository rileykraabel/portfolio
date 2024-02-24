import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <header id="nav-banner">
      <Link to="/portfolio/" id="nav-home">Riley Kraabel</Link>
      <Link to="/portfolio/experience" id="nav-link">Experience</Link>
      <Link to="/portfolio/projects" id="nav-link">Projects</Link>
      <Link to="/portfolio/contact" id="nav-link">Contact Me!</Link>
    </header>
  );
}

export default NavBar