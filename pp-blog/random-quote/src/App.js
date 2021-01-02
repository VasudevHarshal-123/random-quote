import React, { Component } from 'react'
import './App.css';
import Heading from './Components/Heading';
// import Quote from './Components/Quote';
import ChangeQuote from './Components/ChangeQuote';
import NewTab from './Components/NewTab';

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
        {/* <Quote flag = {this.state.flag}/> */}
        <NewTab />
        <ChangeQuote changeState = {this.changeState} />
      </div>
    )
  }
}

export default App

