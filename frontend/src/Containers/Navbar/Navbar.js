import React, { Component } from "react";
import "./Navbar.css";

import Navitem from "../../Components/Navitem/Navitem";
import Navcategory from "../../Components/Navcategory/Navcategory";

class Navbar extends Component {
	state = {
		width: 0,
		height: 0,
		addOnClasses: "",
		hoveredNavitem: "",
		isHoveredSM: false,
		showSidemenu: false,
		isMobileResponsive: false,
		showMobileMenu: false,
	};

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener("resize", this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	};

	handleOver = event => {
		event.stopPropagation();

		this.setState({
			isHoveredSM: true,
			showSidemenu: true,
		});
	};

	handleExit = event => {
		event.stopPropagation();

		this.setState({
			isHoveredSM: false,
			showSidemenu: false,
		});
	};

	changeStyleSM = async (hoveredNavitem, isHoveredNI, addOnClasses) => {
		await this.setState(prevState => ({
			showSidemenu: isHoveredNI || prevState.isHoveredSM,
			addOnClasses,
			hoveredNavitem,
		}));

		if (!this.state.showSidemenu) {
			this.setState({
				hoveredNavitem: "",
			});
		}
	};

	showSidemenu = () => {
		return this.state.showSidemenu
			? {
					display: "flex",
			  }
			: {
					display: "none",
			  };
	};

	componentDidUpdate() {
		if (this.state.width <= 1045 && !this.state.isMobileResponsive) {
			this.setState({
				showSidemenu: false,
				isMobileResponsive: true,
				showMobileMenu: false,
			});
		} else if (this.state.width > 1045 && this.state.isMobileResponsive) {
			this.setState({
				showSidemenu: false,
				isMobileResponsive: false,
				showMobileMenu: true,
			});
		}
	}

	onToggle = () => {
		this.setState(prevState => ({
			showMobileMenu: !prevState.showMobileMenu,
		}));
	};

	getResponsiveStyle = () => {
		if (this.state.isMobileResponsive) {
			return this.state.showMobileMenu
				? { display: "block" }
				: { display: "none" };
		} else {
			return { display: "flex", flexDirection: "row", height: "100%" };
		}
	};

	getSidemenuCategories = () => {
		switch (this.state.hoveredNavitem) {
			case "pets":
				return (
					<React.Fragment>
						<Navcategory
							path="/dogs"
							name="dogs"
							image="/categories/pets/dogs.jpg"
							addOnStyle="red-h"
						/>

						<Navcategory
							path="/cats"
							name="cats"
							image="/categories/pets/cats.jpg"
							addOnStyle="red-h"
						/>

						<Navcategory
							path="/birds"
							name="birds"
							image="/categories/pets/birds.jpg"
							addOnStyle="red-h"
						/>

						<Navcategory
							path="/rodents"
							name="rodents"
							image="/categories/pets/rodents.jpg"
							addOnStyle="red-h"
						/>

						<Navcategory
							path="/rabbits"
							name="rabbits"
							image="/categories/pets/rabbits.jpg"
							addOnStyle="red-h"
						/>
					</React.Fragment>
				);
			case "products":
				return (
					<React.Fragment>
						<Navcategory
							path="/nutrition"
							name="nutrition"
							image="/categories/products/nutrition.jpeg"
							addOnStyle="blue-h"
						/>

						<Navcategory
							path="/costumes"
							name="costumes"
							image="/categories/products/costumes.jpg"
							addOnStyle="blue-h"
						/>

						<Navcategory
							path="/toys"
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
			<nav>
				<div className="nav-container">
					<i className="logo-icon"></i>
					<span className="logo-name">petworld</span>

					<div className="nav-left-container">
						<div className="toggle-nav-items" onClick={this.onToggle}>
							<i className="toggle-icon"></i>
						</div>

						<ul
							className={
								this.state.isMobileResponsive
									? "nav-left-list ls dropdown-menu"
									: "nav-left-list ls"
							}
							style={this.getResponsiveStyle()}
						>
							<Navitem
								path="pets"
								name="pets"
								content="PETS"
								color="red"
								hasSidemenu={true}
								setStyleSidemenu={this.changeStyleSM}
							/>
							<Navitem
								path="products"
								name="products"
								content="PRODUCTS"
								color="blue"
								hasSidemenu={true}
								setStyleSidemenu={this.changeStyleSM}
							/>
							<Navitem
								path="about"
								name="about"
								content="ABOUT"
								color="brown"
								hasSidemenu={false}
								setStyleSidemenu={this.changeStyleSM}
							/>
						</ul>

						<ul
							className={"dropdown-sidemenu ls " + this.state.addOnClasses}
							style={this.showSidemenu()}
							id="scrollable"
							onMouseEnter={this.handleOver}
							onMouseLeave={this.handleExit}
						>
							{this.getSidemenuCategories()}
						</ul>
					</div>

					<ul className="nav-right-list ls">
						<a className="nav-link" href="/">
							<li className="sign-item beige beige-h">SIGN IN</li>
						</a>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
