import React, { Component } from "react";
/*import "../../Containers/PetSection/PetSection.css";*/

import FilterItem from "../FilterItem/FilterItem";
import "./FilterList.css";

class FilterList extends Component {
	render() {
		return (
			<div className="filter-container">
				<div className="filter-toggle">
					<div className="filter-toggle-title">
						<i className="filter-icon"></i>
						<span className="filter-text">FILTER SEARCH</span>
					</div>
					<i className="dropdown-icon"></i>
				</div>

				<ul className="filter-list">
					{this.props.filterCategories.map(filterItem => (
						<FilterItem
							filterItem={filterItem}
							setCheckboxItem={this.props.setCheckboxItem}
						/>
					))}
				</ul>
			</div>
		);
	}
}

export default FilterList;
