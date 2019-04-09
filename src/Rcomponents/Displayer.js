import React, { Component } from 'react';

import Styling from '../Styler/buttons.module.css'
class Displayer extends Component {
	render() {
		return (
			<div className = {Styling.displayer}>
				<p>
					The equation: {this.props.display}
				</p>
			</div>
		);
	}
}
export default Displayer;
