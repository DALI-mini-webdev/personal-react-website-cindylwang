import React from 'react';
import {Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import UserBoard from './components/UserInput/UserBoard';
import ToDoBoard from './components/ToDoBoard';
import './App.css';
import axios from 'axios';
import firebase from './firestore/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  fetchData = () => {
    axios.get("https://poetrydb.org/random")
    .then((response) => {
      console.log(response);
      this.setState({
        data: response.data[0]
      })
    }).catch((error) => {
      console.log(error);
    })
  }

  renderPoem = () => {
    if (this.state.data) {
      return (
        <div>
          <div>Title: {this.state.data.title}</div>
          <div>Author: {this.state.data.author}</div>
          <div>
            {
              this.state.data.lines.map((line) => {
                return(<div>{line}</div>);
              })
            }
          </div>
        </div>
      )
    } else {
      return(<div>Apologies, no poem available.</div>);
    }
  
  }

  render () {
  console.log(this.state.data);
  const name = "Cindy";
  var nameComponent = (name === "Cindy")?
  <h1 className="darkpurple-text"> My name is {name}!</h1> : <p> My name is not Cindy.</p>
  const buttonFunction = () =>
    console.log("The button was clicked.");
    <button onClick="window.open='https://www.youtube.com/watch?v=rEq1Z0bjdwc';"></button>

  console.log(firebase);
  console.log(firebase.db);

  return (
    <div className="App-header">
      <Navbar />
      <header className = "App-header">
        <div>{nameComponent}</div>
        <button onClick={buttonFunction}>Click Me</button>
      </header>

      <a href="https://www.youtube.com/watch?v=rEq1Z0bjdwc" className="App-header">
        If the button doesn't take you to the link, click here instead!</a>
      
      <p className='App-header'>What is your name?</p>
      <UserBoard />

      <p className="App-header">Nice to meet you!</p>

      <p className="lilac-text">I am from Fargo, North Dakota.</p>
      <img src="Fargo.jpg" widgth="500" height="250" alt="Fargo"></img>
      <p className="lilac-text">This term, I'll be living with a few friends in NYC!</p>
      <img src="NYC.jpg" width="445" height="250" alt="NYC"></img>
        
      <div className= "App-header">
          <p className="lilac-text">I am planning on majoring in computer science and economics.</p>
    
          <p className="lilac-text">The classes I'm taking for this quarter are: </p>
              <ul className="brown-text">
                  <li>ECON 1</li>
                  <li>PHYS 3</li>
                  <li>WRIT 5.26</li>
                  <li>WGSS 15</li>
              </ul>

          <p className="lilac-text">Some clubs that I've joined are:</p>
              <ul className="brown-text">
                  <li>Formula Racing</li>
                  <li>Dartmouth Outing Club (DOC)</li>
                  <li>Women in Computer Science (WiCS)</li>
                  <li>Dartmouth Undergraduate Journal of Science (DUJS)</li>
              </ul>
            
          <p className="lilac-text">In my free time, some things that I like to do are:</p>
              <ul className="brown-text">
                  <li>Go for a run or hike</li>
                  <li>Read or write</li>
                  <li>Watch movies and shows</li>
                  <li>Hang out with friends and family</li>
                  <li>Play the piano</li>
                  <li>Bake desserts</li>
                  <li>Paint</li>
              </ul>

      <ToDoBoard />

      <div className="App=header">Here is my data to spice up your life!</div>
      <button onClick={this.fetchData}>Click me for a poem!</button>
      {this.renderPoem()}
      
    </div>
    </div>
    );
  }
}

export default App;