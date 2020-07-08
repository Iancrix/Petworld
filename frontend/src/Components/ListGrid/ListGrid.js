import React, { Component } from "react";
import "./ListGrid.css";
import "../CardGrid/CardGrid.css";

import ListItem from "../../Components/ListItem/ListItem";
import FilterMini from "../../Components/FilterMini/FilterMini";

class ListGrid extends Component {
	state = {
		currentPage: this.props.currentPage,
		maxPages: this.props.maxPages,
	};

	componentDidUpdate() {
		if (this.state.currentPage !== this.props.currentPage) {
			this.setState({
				currentPage: this.props.currentPage,
			});
		}

		if (this.state.maxPages !== this.props.maxPages) {
			this.setState({
				maxPages: this.props.maxPages,
			});
		}
	}

	onClickFwd = event => {
		let nextPage = this.state.currentPage + 1;
		this.props.changePage(nextPage);
	};

	getStyleBwd = () => {
		return this.state.currentPage <= 1 ? { opacity: "0.6" } : {};
	};

	onClickBwd = event => {
		let nextPage = this.state.currentPage - 1;
		this.props.changePage(nextPage);
	};

	getStyleFwd = () => {
		return this.state.currentPage >= this.state.maxPages
			? { opacity: "0.6" }
			: {};
	};

	getActiveFilters = () => {
		const activeFilters = [];
		this.props.activeFilters.forEach(filterCategory => {
			var filters = filterCategory.filters;
			filters.map((filter, i) =>
				activeFilters.push(
					<FilterMini
						key={filter + i}
						name={filter}
						category={filterCategory.category}
						setCheckboxItem={this.props.setCheckboxItem}
					/>
				)
			);
		});

		return activeFilters;
	};

	render() {
		return (
			<div className="results-container">
				<div className="page-toggler">
					<div className="filter-minis">{this.getActiveFilters()}</div>
					<div className="page-indexer">
						<button
							className="backwards"
							onClick={this.onClickBwd}
							style={this.getStyleBwd()}
						>
							<i className="bck-icon"></i>
						</button>
						<div className="current">
							<span className="current-txt">{this.state.currentPage}</span>
						</div>
						<button
							className="forwards"
							onClick={this.onClickFwd}
							style={this.getStyleFwd()}
						>
							<i className="fwd-icon"></i>
						</button>
					</div>
				</div>
				<div className="list-grid">
					{this.props.products.map((product, i) => (
						<ListItem key={i} product={product} />
					))}
				</div>
			</div>
		);
	}
}

export default ListGrid;
