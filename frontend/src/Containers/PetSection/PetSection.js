import React, { Component } from "react";
import "./PetSection.css";

import FilterList from "../../Components/FilterList/FilterList";
import CardGrid from "../../Components/CardGrid/CardGrid";

import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import queryString from "query-string";
import axios from "axios";

class PetSection extends Component {
	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired,
	};

	state = {
		filterCategories: [
			{
				category: "Breed",
				items: [
					{ name: "Labrador Retriever", count: 0, isChecked: false },
					{ name: "German Shepherd", count: 0, isChecked: false },
					{ name: "Bulldog", count: 0, isChecked: false },
					{ name: "Poodle", count: 0, isChecked: false },
					{ name: "Beagle", count: 0, isChecked: false },
				],
				showDropdownList: false,
			},
			{
				category: "Genre",
				items: [
					{ name: "Male", count: 0, isChecked: false },
					{ name: "Female", count: 0, isChecked: false },
				],
				showDropdownList: false,
			},
			{
				category: "Age",
				items: [
					{ name: "Young", count: 0, isChecked: false },
					{ name: "Adult", count: 0, isChecked: false },
					{ name: "Senior", count: 0, isChecked: false },
				],
				showDropdownList: false,
			},
		],
		activeFilters: [
			{
				category: "Breed",
				filters: [],
			},
			{
				category: "Genre",
				filters: [],
			},
			{
				category: "Age",
				filters: [],
			},
		],
		pets: [],
		currentPage: 1,
		elementsPerPage: 8,
		maxPages: 1,
		totalElements: 0,
	};

	setCheckboxItem = (category, name, isChecked) => {
		const nextFilterCategories = this.state.filterCategories.map(
			filterCategory => {
				if (filterCategory.category === category) {
					for (var i in filterCategory.items) {
						if (filterCategory.items[i].name === name) {
							filterCategory.items[i].isChecked = isChecked;
							break;
						}
					}
				}
				return filterCategory;
			}
		);

		this.setState({ filterCategories: nextFilterCategories });

		if (isChecked) {
			const filterToAdd = this.state.activeFilters.find(
				activeFilter => activeFilter.category === category
			);

			const keyParam = category + "_" + filterToAdd.filters.length;
			this.addQuery(keyParam, name);

			const nextActiveFilters = this.state.activeFilters.map(activeFilter => {
				if (activeFilter.category === category) {
					activeFilter.filters.push(name);
				}
				return activeFilter;
			});

			this.setState({
				activeFilters: nextActiveFilters,
			});
		} else {
			const filterToDelete = this.state.activeFilters.find(
				activeFilter => activeFilter.category === category
			);

			const index = filterToDelete.filters.findIndex(filter => filter === name);

			this.state.activeFilters.forEach(activeFilter => {
				if (activeFilter.category === category) {
					activeFilter.filters.forEach((name, index) => {
						let keyParam = category + "_" + index;
						this.deleteQuery(keyParam);
					});
				}
			});

			const nextActiveFilters = this.state.activeFilters.map(activeFilter => {
				if (activeFilter.category === category) {
					activeFilter.filters.splice(index, 1);
				}
				return activeFilter;
			});

			nextActiveFilters.forEach(activeFilter => {
				if (activeFilter.category === category) {
					activeFilter.filters.forEach((name, index) => {
						let keyParam = category + "_" + index;
						this.addQuery(keyParam, name);
					});
				}
			});

			this.setState({
				activeFilters: nextActiveFilters,
			});
		}

		return isChecked;
	};

	setDropdownList = (category, showDropdown) => {
		const nextFilterCategories = this.state.filterCategories.map(
			filterCategory => {
				if (filterCategory.category === category) {
					filterCategory.showDropdownList = showDropdown;
				} else {
					if (showDropdown) {
						filterCategory.showDropdownList = false;
					}
				}
				return filterCategory;
			}
		);
		this.setState({ filterCategories: nextFilterCategories });
		return showDropdown;
	};

	componentDidMount() {
		this.resetQuery();
		this.addQuery("el_sz", this.state.elementsPerPage.toString());
		this.addQuery("page_index", this.state.currentPage.toString());

		axios
			.get(`http://localhost:5000/pets/count`)
			.then(res => {
				this.setState({
					filterCategories: this.state.filterCategories.map(filterCategory => {
						if (
							Object.keys(res.data).includes(
								filterCategory.category.toLowerCase()
							)
						) {
							var categoryGroup =
								res.data[filterCategory.category.toLowerCase()];

							var filterGroup = filterCategory.items;
							for (var i in categoryGroup) {
								for (var j in filterGroup) {
									if (categoryGroup[i]._id === filterGroup[j].name) {
										filterGroup[j].count = categoryGroup[i].count;
									}
								}
							}
						}

						return filterCategory;
					}),
				});
			})
			.catch(e => console.log(e));
	}

	componentDidUpdate(prevProps) {
		const locationChanged = this.props.location !== prevProps.location;
		if (locationChanged) {
			//console.log("location changed !!!");
			axios
				.get(
					`http://localhost:5000/pets/filter${this.props.history.location.search}`
				)
				.then(res => {
					this.setState({
						pets: res.data.pets,
						totalElements: res.data.count,
						maxPages: res.data.maxPages,
					});

					if (
						res.data.count <=
						(this.state.currentPage - 1) * this.state.elementsPerPage
					) {
						this.changePage(1);
					}
				})
				.catch(e => console.log(e));
		}
	}

	onClickTest = () => {
		this.resetQuery();
	};

	changePage = async currentPage => {
		//console.log(this.state.maxPages);
		//console.log(currentPage);
		if (currentPage > 0 && currentPage <= this.state.maxPages) {
			await this.setState({
				currentPage: currentPage,
			});

			/*this.deleteQuery("page_index");*/
			this.addQuery("page_index", this.state.currentPage.toString());
		}

		//console.log(this.state.maxPages);
	};

	getQueryParams = () => {
		return queryString.parse(this.props.history.location.search);
	};

	resetQuery = () => {
		this.props.history.replace({
			...this.props.history.location,
			search: "",
		});
	};

	addQuery = (keyParam, valueParam) => {
		const query = new URLSearchParams(this.props.history.location.search);
		query.set(keyParam, valueParam);
		this.props.history.replace({
			...this.props.history.location,
			search: query.toString(),
		});
	};

	deleteQuery = keyParam => {
		const query = new URLSearchParams(this.props.history.location.search);
		query.delete(keyParam);
		this.props.history.replace({
			...this.props.history.location,
			search: query.toString(),
		});
	};

	render() {
		return (
			<div className="container-full">
				<div className="search-container">
					<FilterList
						filterCategories={this.state.filterCategories}
						setCheckboxItem={this.setCheckboxItem}
						setDropdownList={this.setDropdownList}
					/>
					<CardGrid
						pets={this.state.pets}
						changePage={this.changePage}
						currentPage={this.state.currentPage}
						maxPages={this.state.maxPages}
					/>
				</div>
			</div>
		);
	}
}

export default withRouter(PetSection);
