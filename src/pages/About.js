import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import './Home.css';

export default function About() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>This is a simple base to big project of team three.</p>
                <Link
                    className="App-link"
                    to="/">Back to Home
                </Link>
            </header>
        </div>
    );
}
