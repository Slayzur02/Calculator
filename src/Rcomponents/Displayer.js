import React, { Component } from 'react';

import Styling from '../Styler/buttons.module.css'
class Displayer extends Component {
	render() {
		return (
			<div className = {Styling.displayer} >
			<div class='ui inverted segment'>
				<p>
					The equation: {this.props.display}
				</p>
			</div>
			</div>
		);
	}
}
export default Displayer;
