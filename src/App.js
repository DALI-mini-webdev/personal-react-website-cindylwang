import React from 'react';
import './index.html';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Hello World!<code>My name is</code>Cindy!
                </p>
                <a
                    className="App-link"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Open for a musical surprise!
                </a>
            </header>
        </div>
    );
}