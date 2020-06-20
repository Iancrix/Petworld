import React, { Component } from "react";
import FilterDropdownItem from "../FilterDropdownItem/FilterDropdownItem";
import "./FilterDropdownList.css";

class FilterDropdownList extends Component {
	state = { showDropdown: this.props.showDropdownList };

	showList = () => {
		return this.state.showDropdown
			? {
					display: "block",
			  }
			: {
					display: "none",
			  };
	};

	componentDidUpdate() {
		if (this.state.showDropdown !== this.props.showDropdownList) {
			this.setState({
				showDropdown: this.props.showDropdownList,
			});
		}
	}

	render() {
		return (
			<ul className="filter-dropdown-list ls" style={this.showList()}>
				{this.props.itemsList.map((item, i) => (
					<FilterDropdownItem
						key={i}
						item={item}
						category={this.props.category}
						setCheckboxItem={this.props.setCheckboxItem}
						activeFilters={this.props.activeFilters}
					/>
				))}
			</ul>
		);
	}
}

export default FilterDropdownList;
