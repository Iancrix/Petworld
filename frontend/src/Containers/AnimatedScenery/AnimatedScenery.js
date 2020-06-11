import React, { Component } from "react";
import "./AnimatedScenery.css";

class AnimatedScenery extends Component {
	render() {
		return (
			<div className="animated-scenery">
				<div className="sky"></div>
				<div className="forest"></div>
				<div className="path">
					<div className="dog"></div>
				</div>
				<div className="urban-path"></div>
				<div className="street">
					<div className="car"></div>
				</div>
				<div className="urban-path-2"></div>
			</div>
		);
	}
}

export default AnimatedScenery;
