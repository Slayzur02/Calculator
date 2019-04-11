import React, {Component} from 'react';
import {Button} from 'semantic-ui-react'

import ButtonStyling from '../Styler/buttons.module.css'

class ButtonMade extends Component {
	handleAddToDisplay = () => {
		this.props.addToDisplay(this.props.syntax)
	}
    render() {
        return (
            <Button className = 'ui circular'color = 'green'className = {ButtonStyling.buttons} onClick={this.handleAddToDisplay}>
            	<p >{this.props.syntax}</p>
            </Button>
        );
    }
}

export default ButtonMade;