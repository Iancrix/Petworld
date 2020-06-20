import React, { Component } from "react";
import "./CardGrid.css";

import CardItem from "../CardItem/CardItem";

class CardGrid extends Component {
	state = {
		currentPage: this.props.currentPage,
		maxPages: this.props.maxPages,
	};

	componentDidUpdate() {
		if (this.state.currentPage != this.props.currentPage) {
			this.setState({
				currentPage: this.props.currentPage,
			});
		}

		if (this.state.maxPages != this.props.maxPages) {
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

	render() {
		return (
			<div className="results-container">
				<div className="page-toggler">
					<div className="filter-minis">
						<div className="fil">
							<div className="fil-pr">
								<span className="fil-txt">Labrador Retriever</span>
								<div className="fil-cls">
									<i className="x-icon"></i>
								</div>
							</div>
						</div>
					</div>
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
				<div className="grid">
					{this.props.pets.map(pet => (
						<CardItem pet={pet} />
					))}
				</div>
			</div>
		);
	}
}

export default CardGrid;
