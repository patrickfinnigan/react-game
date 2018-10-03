import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import symbols from "./symbols.json";

class App extends Component {

  state = {
    symbols
  };

  buttonsClicked = [];

  handleClick(id) {
    // e.preventDefault();
    // 1. Shuffle icons
    // If previously clicked, deduct points and re-shuffle
    console.log(`Button pressed: ${id}`);
    // If not previously clicked, push clicked into array
    this.buttonsClicked.push(id);
    console.log(this.buttonsClicked);
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Wrapper>
          {this.state.symbols.map(symbol => (
            <button
              onClick={() => this.handleClick(symbol.id)}
              key={symbol.id}>
              <Card id={symbol.id}
                image={symbol.image}
              />
            </button>
          ))}
        </Wrapper>
      </div>
    );

  }
}

export default App;
