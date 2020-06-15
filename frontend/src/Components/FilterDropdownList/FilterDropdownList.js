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
		if (this.state.showDropdown != this.props.showDropdownList) {
			this.setState({
				showDropdown: this.props.showDropdownList,
			});
		}
	}

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
