import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Hello World! <code>My name is</code> Cindy!
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );

    
    const name = "Cindy"
    
    var nameComponent = (name === "Cindy") ?
    <p>Hello World! My name is Cindy!</p> : <p>My name isn't Cindy.</p>;

    const buttonFunction = () => {
        console.log("The butto nwas clicked.");
    }
    return (

        <div className="App">
            <header className="App-header">
                <div>(nameComponent)</div>
                <button onClick={buttonFunction}>I am a button</button>
            </header>
        </div>
    );
}