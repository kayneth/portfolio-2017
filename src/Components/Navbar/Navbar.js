import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

import './Navbar.css'

export default class Navbar extends Component {

    render()
    {
        return (
            <nav className="Navbar">
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/#portfolio">Portfolio</Link></li>
                    <li><Link to="/#projets">Mes projets</Link></li>
                    <li><Link to="blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        );

    }
}