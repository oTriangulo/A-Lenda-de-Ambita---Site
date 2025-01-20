// Navbar para o Header
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/personagens">Personagens</Link></li>
                <li><Link to="/lugares">Lugares</Link></li>
                <li><Link to="/elementos">Elementos</Link></li>
                <li><Link to="/omundo">O Mundo</Link></li>
                <li><Link to="/galeria">Galeria</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;