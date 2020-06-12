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

	componentDidUpdate() {
		if (this.state.width <= 1045 && !this.state.isMobileResponsive) {
			this.setState({
				isMobileResponsive: true,
				showMobileMenu: false,
			});
		} else if (this.state.width > 1045 && this.state.isMobileResponsive) {
			this.setState({
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
				? {
						display: "block",
						animation: "slide-out 0.5s forwards",
				  }
				: { display: "none", animation: "slide-in 0.5s forwards" };
		} else {
			return {
				/* display: "flex", flexDirection: "row", height: "100%" */
			};
		}
	};

	/*
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
*/
	render() {
		return (
			<nav>
				<div className="nav-container">
					<i className="logo-icon"></i>
					<span className="logo-name">petworld</span>

					<div className="nav-left-container">
						<div className="toggle-nav-list">
							<div className="toggle-nav-items" onClick={this.onToggle}>
								<i className="toggle-icon"></i>
							</div>
						</div>
						<div
							className={
								this.state.isMobileResponsive
									? "dropdown-menu"
									: "no-dropdown-menu"
							}
							style={this.getResponsiveStyle()}
						>
							<ul
								className={
									this.state.isMobileResponsive
										? "nav-left-list ls"
										: "nav-left-list ls"
								}
							>
								<div className="left-nav">
									<Navitem
										path="pets"
										name="pets"
										content="PETS"
										color="red"
										hasSidemenu={true}
										setStyleSidemenu={this.changeStyleSM}
										isMobileResponsive={this.state.isMobileResponsive}
									/>
									<Navitem
										path="products"
										name="products"
										content="PRODUCTS"
										color="blue"
										hasSidemenu={true}
										setStyleSidemenu={this.changeStyleSM}
										isMobileResponsive={this.state.isMobileResponsive}
									/>
									<Navitem
										path="about"
										name="about"
										content="ABOUT"
										color="brown"
										hasSidemenu={false}
										setStyleSidemenu={this.changeStyleSM}
										isMobileResponsive={this.state.isMobileResponsive}
									/>
								</div>
								<div className="right-nav">
									<a className="sign-link" href="/">
										<li className="nav-item beige beige-h sign-item">
											SIGN IN
										</li>
									</a>
								</div>
							</ul>
						</div>

						{console.log("aqui va sidemenu")}
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
