import React, { Component } from "react";
import "./ProductSection.css";

import FilterList from "../../Components/FilterList/FilterList";
import ListGrid from "../../Components/ListGrid/ListGrid";
import SearchBox from "../../Components/SearchBox/SearchBox";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import queryString from "query-string";
import axios from "axios";

class ProductSection extends Component {
	state = {
		filterCategories: [
			{
				category: "Animal",
				items: [],
				showDropdownList: false,
			},
			{
				category: "Size",
				items: [],
				showDropdownList: false,
			},
			{
				category: "Brand",
				items: [],
				showDropdownList: false,
			},
			{
				category: "Price",
				items: [],
				showDropdownList: false,
			},
		],
		products: [],
		activeFilters: [
			{
				category: "Animal",
				filters: [],
			},
			{
				category: "Size",
				filters: [],
			},
			{
				category: "Brand",
				filters: [],
			},
			{
				category: "Price",
				filters: [],
			},
		],
		currentPage: 1,
		elementsPerPage: 8,
		maxPages: 1,
		totalElements: 0,
		productType: this.props.match.params.productType,
		searchString: "",
	};

	setSearchString = search => {
		this.setState({
			searchString: search,
		});
	};

	applySearch = () => {
		if (this.state.searchString) {
			this.addQuery("searchfor", this.state.searchString);
		} else {
			this.deleteQuery("searchfor");
		}
	};

	componentDidMount() {
		this.addQuery("page_index", this.state.currentPage.toString());
		this.updateCategories();
	}

	updateCategories = () => {
		this.setState({
			filterCategories: this.state.filterCategories.map(filterCategory => {
				filterCategory.items = [];
				return filterCategory;
			}),
			activeFilters: this.state.activeFilters.map(activeFilter => {
				activeFilter.filters = [];
				return activeFilter;
			}),
		});
		axios
			.get(
				`http://localhost:5000/productsRoute/${this.props.match.params.productType}/count`
			)
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
							for (var i in categoryGroup) {
								filterCategory.items.push({
									name: categoryGroup[i]._id,
									count: categoryGroup[i].count,
									isChecked: false,
								});
							}
						}

						return filterCategory;
					}),
				});
			})
			.catch(e => console.log(e));
	};

	componentDidUpdate(prevProps) {
		if (this.state.productType !== this.props.match.params.productType) {
			this.setState({
				productType: this.props.match.params.productType,
			});

			this.updateCategories();
		}

		const query = new URLSearchParams(this.props.history.location.search);
		if (!query.get("page_index")) {
			this.addQuery("page_index", "1");
			this.setState({
				currentPage: 1,
			});
		}

		const locationChanged = this.props.location !== prevProps.location;
		if (locationChanged) {
			axios
				.get(
					`http://localhost:5000/productsRoute/${this.props.match.params.productType}/filter${this.props.history.location.search}`
				)
				.then(res => {
					this.setState({
						products: res.data.products,
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

	changePage = async currentPage => {
		if (currentPage > 0 && currentPage <= this.state.maxPages) {
			await this.setState({
				currentPage: currentPage,
			});

			this.addQuery("page_index", this.state.currentPage.toString());
		}
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
				<div className="box-container">
					<SearchBox
						setSearchString={this.setSearchString}
						applySearch={this.applySearch}
						searchString={this.state.searchString}
					/>
				</div>

				<div className="search-container">
					<FilterList
						filterCategories={this.state.filterCategories}
						setCheckboxItem={this.setCheckboxItem}
						setDropdownList={this.setDropdownList}
					/>
					<ListGrid
						products={this.state.products}
						changePage={this.changePage}
						currentPage={this.state.currentPage}
						maxPages={this.state.maxPages}
						activeFilters={this.state.activeFilters}
						setCheckboxItem={this.setCheckboxItem}
					/>
				</div>
			</div>
		);
	}
}

export default withRouter(ProductSection);
