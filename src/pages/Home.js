import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import './Home.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Home.js</code> and save to reload.
        </p>
        <Link
          className="App-link"
          to="/about"
        >
          Go To About Page
        </Link>
      </header>
    </div>
  );
}

export default App;
