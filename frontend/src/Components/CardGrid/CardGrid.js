import React, { Component } from "react";
import "./CardGrid.css";

import CardItem from "../CardItem/CardItem";

class CardGrid extends Component {
	render() {
		return (
			<div className="results-container">
				<div className="grid">
					{this.props.pets.map(pet => (
						<CardItem pet={pet} />
					))}
				</div>
			</div>
		);
	}
}

export default CardGrid;
