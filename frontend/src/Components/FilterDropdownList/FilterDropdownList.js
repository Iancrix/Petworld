import React, { Component } from "react";
import FilterDropdownItem from "../FilterDropdownItem/FilterDropdownItem";
import "./FilterDropdownList.css";

class FilterDropdownList extends Component {
	showList = () => {
		return this.props.showDropdownList
			? {
					display: "block",
			  }
			: {
					display: "none",
			  };
	};

	render() {
		return (
			<ul className="filter-dropdown-list ls" style={this.showList()}>
				{this.props.itemsList.map(item => (
					<FilterDropdownItem
						item={item}
						category={this.props.category}
						setCheckboxItem={this.props.setCheckboxItem}
					/>
				))}
			</ul>
		);
	}
}

export default FilterDropdownList;
