import React, { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
	state = {
		search: "",
	};

	handleChange = event => {
		this.props.setSearchString(event.target.value);
	};

	/*
	handleKeyDown = e => {
		if (e.key === "Enter") {
			//console.log("do validate");
			//this.props.applySearch();
		}
	};*/

	onSubmit = e => {
		e.preventDefault();
		this.props.applySearch();
	};

	componentDidUpdate() {
		if (this.state.search !== this.props.searchString) {
			this.setState({
				search: this.props.searchString,
			});
		}
	}

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<div className="search-box-container">
					<div className="search-title">
						<span className="search-txt">SEARCH:</span>
					</div>
					<div className="search-input">
						<input
							type="text"
							className="input-search"
							name="search"
							value={this.state.search}
							onChange={this.handleChange}
							onKeyDown={this.handleKeyDown}
						></input>
						<input type="submit" className="btn-search" value=""></input>
					</div>
				</div>
			</form>
		);
	}
}

export default SearchBox;
