import React, { Component } from "react";
import "../CardGrid/CardGrid.css";

class FilterMini extends Component {
	onClick = event => {
		console.log("delete filter");

		this.props.setCheckboxItem(this.props.category, this.props.name, false);
	};

	render() {
		return (
			<div className="fil">
				<div className="fil-pr">
					<span className="fil-txt">{this.props.name}</span>
					<div className="fil-cls" onClick={this.onClick}>
						<i className="x-icon"></i>
					</div>
				</div>
			</div>
		);
	}
}

export default FilterMini;
