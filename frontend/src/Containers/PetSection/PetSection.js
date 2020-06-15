import React, { Component } from "react";
import "./PetSection.css";

import FilterList from "../../Components/FilterList/FilterList";
import CardGrid from "../../Components/CardGrid/CardGrid";

class PetSection extends Component {
	state = {
		filterCategories: [
			{
				category: "Raza",
				items: [
					{ name: "Labrador Reriever", count: "57", isChecked: false },
					{ name: "German Shepherd", count: "42", isChecked: false },
					{ name: "Bulldog", count: "31", isChecked: true },
					{ name: "Poodle", count: "14", isChecked: false },
					{ name: "Beagle", count: "28", isChecked: false },
				],
			},
			{
				category: "Genero",
				items: [
					{ name: "Masculino", count: "113", isChecked: false },
					{ name: "Femenino", count: "91", isChecked: false },
				],
			},
			{
				category: "Edad",
				items: [
					{ name: "Young", count: "32", isChecked: false },
					{ name: "Adult", count: "34", isChecked: false },
					{ name: "Senior", count: "41", isChecked: false },
				],
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
						}
					}
				}
				return filterCategory;
			}
		);
		this.setState({ filterCategories: nextFilterCategories });
	};

	render() {
		return (
			<div className="container-full">
				<div className="search-container">
					<FilterList
						filterCategories={this.state.filterCategories}
						setCheckboxItem={this.setCheckboxItem}
					/>
					<CardGrid />
				</div>
			</div>
		);
	}
}

export default PetSection;
