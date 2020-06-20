import React, { Component } from "react";
/*import "../../Containers/PetSection/PetSection.css";*/

import FilterItem from "../FilterItem/FilterItem";
import "./FilterList.css";

class FilterList extends Component {
	state = {
		showFilterList: true,
	};

	onClick = () => {
		this.setState({
			showFilterList: !this.state.showFilterList,
		});
	};

	getStyle = () => {
		return this.state.showFilterList
			? {
					borderRadius: "7px 7px 0px 0px",
			  }
			: {
					borderRadius: "7px",
			  };
	};

	getAnim = () => {
		return this.state.showFilterList
			? {
					transform: "rotate(-180deg)",
			  }
			: {
					transform: "rotate(0deg)",
			  };
	};

	getStyleList = () => {
		return this.state.showFilterList
			? {
					display: "block",
			  }
			: {
					display: "none",
			  };
	};

	render() {
		return (
			<div className="filter-container">
				<div
					className="filter-toggle"
					onClick={this.onClick}
					style={this.getStyle()}
				>
					<div className="filter-toggle-title">
						<i className="filter-icon"></i>
						<span className="filter-text">FILTER SEARCH</span>
					</div>
					<i className="dropdown-icon" style={this.getAnim()}></i>
				</div>

				<ul className="filter-list" style={this.getStyleList()}>
					{this.props.filterCategories.map((filterItem, i) => (
						<FilterItem
							key={i}
							filterItem={filterItem}
							setCheckboxItem={this.props.setCheckboxItem}
							setDropdownList={this.props.setDropdownList}
						/>
					))}
				</ul>
				<div className="filter-end" style={this.getStyleList()}></div>
			</div>
		);
	}
}

export default FilterList;
