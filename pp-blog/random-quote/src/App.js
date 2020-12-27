import React, { Component } from 'react'
import './App.css';
import Heading from './Components/Heading';
import Quote from './Components/Quote';
import ChangeQuote from './Components/ChangeQuote';

export class App extends Component {
  constructor(){
    super();
    this.state = {
        changeQuote:0
    }
}
  changeState = () => {

  }
  render() {
    return (
      <div className = "app">
        <Heading />
        <Quote />
        <ChangeQuote changeQuote = {this.changeState} />
      </div>
    )
  }
}

export default App

