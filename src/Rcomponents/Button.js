import React, {Component} from 'react';

import ButtonStyling from '../Styler/buttons.module.css'

class Button extends Component {
	handleAddToDisplay = () => {
		this.props.addToDisplay(this.props.syntax)
	}
    render() {
        return (
            <div className = {ButtonStyling.buttons} onClick={this.handleAddToDisplay}>
            	<p  >{this.props.syntax}</p>
            </div>
        );
    }
}

export default Button;