import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p> Hello World! :)<code> My name is</code> Cindy and 
                    I am from Fargo, North Dakota.</p>
                <p> This term, I'll be living with a few friends in NYC!</p>
                <p> I am planning on majoring in computer science and economics.</p>

                <a
                    className="App-link"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Open to discover my deepest, darkest secret!
                </a>
            </header>
        </div>
    );

    const name = "Cindy";
    var nameComponent = (name === "Cindy") ?
    const buttonFunction = () => {
        console.log("The button was clicked.");
    }
    
    return (
        <div className = "App">
            <header className="App-header">
                <div>{nameComponent}</div>
                <button onClick={buttonFunction}>Click here!</button>
            </header>
        </div>
    );
}

export default App;