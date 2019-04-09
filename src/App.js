import React, { Component } from 'react';

import Button from './Rcomponents/Button.js'
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
      <div className={Grid.grider}>
        <p className = {Grid.answer}>Answer: {this.state.answer}</p>
        
        <Displayer display = {this.state.display}/>
        <Button syntax = '0' addToDisplay = {this.addToDisplay}/>
        <Button syntax = '1' addToDisplay = {this.addToDisplay}/>
        <Button syntax = '2' addToDisplay = {this.addToDisplay}/>
        <Button syntax = '3' addToDisplay = {this.addToDisplay}/>
        <Button syntax = '4' addToDisplay = {this.addToDisplay}/>
        <Button syntax = '5' addToDisplay = {this.addToDisplay}/>
        <Button syntax = '6' addToDisplay = {this.addToDisplay}/>
        <Button syntax = '7' addToDisplay = {this.addToDisplay}/>
        <Button syntax = '8' addToDisplay = {this.addToDisplay}/>
        <Button syntax = '9' addToDisplay = {this.addToDisplay}/>
        <Button syntax = '+' addToDisplay = {this.addToDisplay}/>
        <Button syntax = '-' addToDisplay = {this.addToDisplay}/>
        <Button syntax = '*' addToDisplay = {this.addToDisplay}/>
        <Button syntax = '/' addToDisplay = {this.addToDisplay}/>
        <Button syntax = 'clear' addToDisplay = {this.clear}/>
        <Equal answer = {this.state.answer} calculate = {this.calculate}/>
      </div>
    );
  }
}

export default App;
