import React, { Component } from "react";
import "./PetSection.css";

import FilterList from "../../Components/FilterList/FilterList";
import CardGrid from "../../Components/CardGrid/CardGrid";

import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import queryString from "query-string";

class PetSection extends Component {
	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired,
	};

	state = {
		filterCategories: [
			{
				category: "Raza",
				items: [
					{ name: "Labrador Retriever", count: "57", isChecked: false },
					{ name: "German Shepherd", count: "42", isChecked: false },
					{ name: "Bulldog", count: "31", isChecked: false },
					{ name: "Poodle", count: "14", isChecked: false },
					{ name: "Beagle", count: "28", isChecked: false },
				],
				showDropdownList: false,
			},
			{
				category: "Genero",
				items: [
					{ name: "Masculino", count: "113", isChecked: false },
					{ name: "Femenino", count: "91", isChecked: false },
				],
				showDropdownList: false,
			},
			{
				category: "Edad",
				items: [
					{ name: "Young", count: "32", isChecked: false },
					{ name: "Adult", count: "34", isChecked: false },
					{ name: "Senior", count: "41", isChecked: false },
				],
				showDropdownList: false,
			},
		],
		pets: [
			{
				id: "1",
				name: "Rex",
				age: "Adult",
				breed: "Labrador Retriever",
				location: "Lousiana",
				country: "USA",
				description:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
				perks: ["Amistoso", "Jugueton", "Leal"],
				image: "/petimages/Labrador_Retriever.jpg",
				id_rescue: "1",
			},
			{
				id: "2",
				name: "Rayo",
				age: "Young",
				breed: "German Shepherd",
				location: "California",
				country: "USA",
				description:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
				perks: ["Amistoso", "Jugueton", "Leal"],
				image: "/petimages/German_Shepherd.jpg",
				id_rescue: "2",
			},
			{
				id: "3",
				name: "Benny",
				age: "Senior",
				breed: "Bulldog",
				location: "Delaware",
				country: "USA",
				description:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
				perks: ["Amistoso", "Jugueton", "Leal"],
				image: "/petimages/Bulldog.jpg",
				id_rescue: "3",
			},
			{
				id: "4",
				name: "Alicia",
				age: "Young",
				breed: "Poodle",
				location: "Washington",
				country: "USA",
				description:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
				perks: ["Amistoso", "Jugueton", "Leal"],
				image: "/petimages/Poodle.jpg",
				id_rescue: "4",
			},
			{
				id: "5",
				name: "Tristan",
				age: "Adult",
				breed: "Beagle",
				location: "New York",
				country: "USA",
				description:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
				perks: ["Amistoso", "Jugueton", "Leal"],
				image: "/petimages/Beagle.jpg",
				id_rescue: "5",
			},
		],
		activeFilters: [
			{
				category: "Raza",
				filters: [],
			},
			{
				category: "Genero",
				filters: [],
			},
			{
				category: "Edad",
				filters: [],
			},
		],
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
	}

	componentDidUpdate(prevProps) {
		const locationChanged = this.props.location !== prevProps.location;
		if (locationChanged) {
			console.log("location changed !!!");
		}
	}

	onClickTest = () => {
		this.resetQuery();
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
				<h1>Hello World!!</h1>
				<div className="search-container">
					<FilterList
						filterCategories={this.state.filterCategories}
						setCheckboxItem={this.setCheckboxItem}
						setDropdownList={this.setDropdownList}
					/>
					<CardGrid pets={this.state.pets} />
				</div>
			</div>
		);
	}
}

export default withRouter(PetSection);
