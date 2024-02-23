import { Link } from 'react-router-dom';

import './NavBar.css';

function NavBar() {
    return (
        <header id="nav-banner">
            <span>Riley Kraabel</span>
            <a href="/about">About</a>
            <a href="/contact">Contact Me!</a>
        </header>
    );
}

export default NavBar