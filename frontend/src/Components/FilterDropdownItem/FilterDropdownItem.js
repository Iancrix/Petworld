import React, { Component } from "react";
/*import "../../Containers/PetSection/PetSection.css";*/

import "./FilterDropdownItem.css";
class FilterDropdownItem extends Component {
	state = {
		checked: this.props.item.isChecked,
	};

	handleCheckbox = async () => {
		await this.setState({ checked: !this.state.checked });

		this.props.setCheckboxItem(
			this.props.category,
			this.props.item.name,
			this.state.checked
		);
	};

	onClick = () => {
		console.log("clickeo");
	};

	render() {
		return (
			<li className="filter-dropdown-item" onClick={this.onClick}>
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
							onChange={this.handleCheckbox}
						></input>
					</div>
				</div>
			</li>
		);
	}
}

export default FilterDropdownItem;
