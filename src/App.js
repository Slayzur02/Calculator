import React, { Component } from 'react';

import {Button} from 'semantic-ui-react'
import { Responsive, Segment } from 'semantic-ui-react'

import ButtonMade from './Rcomponents/Button.js'
import Displayer from './Rcomponents/Displayer.js'
import Equal from './Rcomponents/Equal.js'
import Grid from './Styler/grid.module.css'

class App extends Component {
  state = {
    answer: 0,
    display: '',
  };
  addToDisplay = (syntax) => {
    const prevState = this.state.display
    this.setState(
    {
      display: prevState.concat(syntax)
    });
  }
  calculate = () => {
    const value = eval(this.state.display)
    this.setState({
      answer: value
    });
  }
  clear = () => {
    this.setState({
      display: ''
    })
  }
  render() {
    return (
      <div >
      <div className={Grid.grider}>
        <div className = {Grid.answer}>
          <div class = 'ui inverted segment' >Answer: {this.state.answer}</div>      
        </div>
        <Displayer display = {this.state.display}/>
            <ButtonMade syntax = '0' addToDisplay = {this.addToDisplay}/>
            <ButtonMade syntax = '1' addToDisplay = {this.addToDisplay}/>
            <ButtonMade syntax = '2' addToDisplay = {this.addToDisplay}/>
            <ButtonMade syntax = '3' addToDisplay = {this.addToDisplay}/>
            <ButtonMade syntax = '4' addToDisplay = {this.addToDisplay}/>
            <ButtonMade syntax = '5' addToDisplay = {this.addToDisplay}/>
            <ButtonMade syntax = '6' addToDisplay = {this.addToDisplay}/>
            <ButtonMade syntax = '7' addToDisplay = {this.addToDisplay}/>
            <ButtonMade syntax = '8' addToDisplay = {this.addToDisplay}/>
            <ButtonMade syntax = '9' addToDisplay = {this.addToDisplay}/>
            <ButtonMade syntax = '+' addToDisplay = {this.addToDisplay}/>
            <ButtonMade syntax = '-' addToDisplay = {this.addToDisplay}/>
            <ButtonMade syntax = '*' addToDisplay = {this.addToDisplay}/>
            <ButtonMade syntax = '/' addToDisplay = {this.addToDisplay}/>
            <ButtonMade syntax = 'clear' addToDisplay = {this.clear}/>
        
        <Equal answer = {this.state.answer} calculate = {this.calculate}/>
      </div>
      </div>
    );
  }
}

export default App;
