import React, { Component } from 'react';
import pic from './picMe.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pic} className="App-me" alt="Me" />
          <h1 className="App-title">Sarah Smolen</h1>
        </header>
        <p className="App-intro">
          Full Stack Developer
        </p>
      </div>
    );
  }
}

export default App;
