import React, { Component } from 'react'
import './App.css';
import Heading from './Components/Heading';
import Quote from './Components/Quote';
import ChangeQuote from './Components/ChangeQuote';

export class App extends Component {
  constructor(){
    super();
    this.state = {
        flag:0
    }
}
  changeState = () => {
    this.setState({
      flag : !this.state.flag
    })
  }

  render() {
    return (
      <div className = "app">
        <Heading />
        <Quote flag = {this.state.flag}/>
        <ChangeQuote changeState = {this.changeState} />
      </div>
    )
  }
}

export default App

