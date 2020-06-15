import React, { Component } from "react";
import FilterDropdownList from "../FilterDropdownList/FilterDropdownList";
import "./FilterItem.css";

class FilterItem extends Component {
	state = {
		showDropdownList: false,
	};
	onClick = event => {
		this.setState(prevState => ({
			showDropdownList: !prevState.showDropdownList,
		}));
	};

	render() {
		return (
			<li className="ls filter-list-item">
				<div className="relative">
					<div>
						<div className="filter-item-title">
							{this.props.filterItem.category}
						</div>
						<button className="filter-item-btn" onClick={this.onClick}>
							<div className="filter-btn-text">Any</div>
							<i className="dropdown-icon-smooth"></i>
						</button>
					</div>
					<div>
						<FilterDropdownList
							showDropdownList={this.state.showDropdownList}
							category={this.props.filterItem.category}
							itemsList={this.props.filterItem.items}
							setCheckboxItem={this.props.setCheckboxItem}
						/>
					</div>
				</div>
			</li>
		);
	}
}

export default FilterItem;
