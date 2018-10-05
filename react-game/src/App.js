import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import symbols from "./symbols.json";
import _ from "lodash";
// import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends Component {

  state = {
    symbols,
    buttonsClicked : [],
    score : 0,
    highScore : 0
  };
  // NB:
  // Whenever you need to shuffle, save _.shuffle(your_json) to an array in state
  // Then, map over shuffled array each time you need to re-render
  // handleClick -> setState new shuffle -> trigger a re-render 
  

  // divide each entry in the json into its own object array
  // assign each new object their own separate id number
  // make a number generator that can generate numbers between 1-12 
  // *somehow* apply each random number to each array object and make that its new id
  // *somehow*   


  handleClick(id) {
    // e.preventDefault();
    // 1. Shuffle icons
    // If previously clicked, deduct points and re-shuffle
    console.log(`Button pressed: ${id}`);
    // If not previously clicked, push clicked into array
    // this.buttonsClicked.push(id);
    
    const shuffle = _.shuffle(symbols);
    this.setState({symbols:shuffle});
    console.log(shuffle);
    this.checkGuess(id);
  }

  checkGuess(id) {
    if (this.state.buttonsClicked.includes(id)) {
      this.setState({
        buttonsClicked : [], 
        score : 0});
      alert("Try again!");
    } else {
      const buttonsClicked = this.state.buttonsClicked
      buttonsClicked.push(id)
      console.log(buttonsClicked);
      this.setState({
        score : this.state.score + 1,
        highScore : this.state.highScore + 1,
        buttonsClicked
      })
    }
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Shuffle</h1>
        </header>
        <p className="App-intro">
          Current Score: {this.state.score} High Score: {this.state.highScore}

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
    // <Grid fluid>
    //   <Row>
    //     <Col xs={6} md={3}>
    //       Hello, world!
    //   </Col>
    //   </Row>
    // </Grid> 

    //try ti use this gid system somewhere?

    // add onclick handle to randomize the positions of the props
    // add if/else statement that states
    //if the button we click on has an id number matching any single entry in the buttonsClicked array, we reset the score
    //else, we do nothing
    // we make two score counters, both that incriment by one when we achieve the else statement of the if/else
    //one that resets on the event of the if statement of the above if/else
    //one that does not reset
  }
}

export default App;
