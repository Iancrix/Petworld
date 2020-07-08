import React, { Component } from "react";
import "../../Containers/Navbar/Navbar.css";
import Navcategory from "../Navcategory/Navcategory";

class Sidemenu extends Component {
	state = {
		isHovered: false,
		showSidemenu: false,
	};

	showSidemenu = () => {
		return this.props.isHoveredNI || this.state.isHovered
			? {
					display: "flex",
			  }
			: {
					display: "none",
			  };
	};

	handleOver = event => {
		event.stopPropagation();

		this.setState({
			isHovered: true,
			showSidemenu: true,
		});
	};

	handleExit = event => {
		event.stopPropagation();

		this.setState({
			isHovered: false,
			showSidemenu: false,
		});

		this.props.setNIExit();
	};

	getSidemenuCategories = () => {
		switch (this.props.nameNavItem) {
			case "pets":
				return (
					<React.Fragment>
						<Navcategory
							path="/pets/Dog"
							name="dogs"
							cat="Dog"
							image="/categories/pets/dogs.jpg"
							addOnStyle="red-h"
						/>

						<Navcategory
							path="/pets/Cat"
							name="cats"
							cat="Cat"
							image="/categories/pets/cats.jpg"
							addOnStyle="red-h"
						/>
					</React.Fragment>
				);
			case "products":
				return (
					<React.Fragment>
						<Navcategory
							path="/products/Nutrition"
							name="nutrition"
							image="/categories/products/nutrition.jpeg"
							addOnStyle="blue-h"
						/>

						<Navcategory
							path="/products/Costumes"
							name="costumes"
							image="/categories/products/costumes.jpg"
							addOnStyle="blue-h"
						/>

						<Navcategory
							path="/products/Toys"
							name="toys"
							image="/categories/products/toys.jpg"
							addOnStyle="blue-h"
						/>
					</React.Fragment>
				);
			default:
				return <React.Fragment></React.Fragment>;
		}
	};

	render() {
		return (
			<ul
				className={"ls dropdown-sidemenu " + this.props.addOnClasses}
				style={this.showSidemenu()}
				onMouseOver={this.handleOver}
				onMouseLeave={this.handleExit}
			>
				{this.getSidemenuCategories()}
			</ul>
		);
	}
}

export default Sidemenu;
