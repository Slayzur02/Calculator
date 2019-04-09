import React, { Component } from 'react';

import Styling from '../Styler/grid.module.css'

class Equal extends Component {
	handleCalculate = () => {
		this.props.calculate()
	}
	render() {
		return (
			<div onClick = {this.handleCalculate} className = {Styling.equal}>
				=
			</div>
		);
	}
}

export default Equal