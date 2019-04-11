import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'

import Styling from '../Styler/grid.module.css'

class Equal extends Component {
	handleCalculate = () => {
		this.props.calculate()
	}
	render() {
		return (
			<Button color = 'green' onClick = {this.handleCalculate} className = {Styling.equal}>
				=
			</Button>
		);
	}
}

export default Equal