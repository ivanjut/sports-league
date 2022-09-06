import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {

    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                </button>

                <div className="collapse navbar-collapse mx-auto justify-content-center">
                    <Link to='/' className="navbar-brand">SportsLeague</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/about' className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/team' className="nav-link">Team</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;