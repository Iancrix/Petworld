import React, { Component } from "react";
/*import "../../Containers/PetSection/PetSection.css";*/

import "./FilterDropdownItem.css";
class FilterDropdownItem extends Component {
	state = {
		checked: this.props.item.isChecked,
	};

	onClick = () => {
		this.props.setCheckboxItem(
			this.props.category,
			this.props.item.name,
			!this.state.checked
		);
	};

	componentDidUpdate() {
		if (this.state.checked !== this.props.item.isChecked) {
			console.log("it changed");
			this.setState({
				checked: this.props.item.isChecked,
			});
		}
	}

	getStyle = () => {
		return this.state.checked
			? {
					background: "#ef5866",
					color: "white",
					borderBottom: "5px solid white",
			  }
			: {
					background: "#2daaff",
					color: "black",
			  };
	};

	render() {
		return (
			<li
				className="filter-dropdown-item"
				onClick={this.onClick}
				style={this.getStyle()}
			>
				<div className="filter-dropdown-inner">
					<div className="filter-dropdown-item-title">
						{this.props.item.name}
					</div>
					<div className="right">
						<div className="item-count">({this.props.item.count})</div>
						<input
							className="checkbox-dropdown"
							type="checkbox"
							checked={this.state.checked}
							readOnly
						></input>
					</div>
				</div>
			</li>
		);
	}
}

export default FilterDropdownItem;
