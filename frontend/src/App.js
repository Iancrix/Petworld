import React, { Component } from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Navbar from "./Containers/Navbar/Navbar";
import AnimatedScenery from "./Containers/AnimatedScenery/AnimatedScenery";
import PetSection from "./Containers/PetSection/PetSection";
import ProductSection from "./Containers/ProductSection/ProductSection";
import PetProfile from "./Containers/PetProfile/PetProfile";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";

class App extends Component {
	render() {
		return (
			<div>
				<Route
					exact
					path="/"
					render={props => (
						<React.Fragment>
							<Navbar />
							<AnimatedScenery />
							<Footer />
						</React.Fragment>
					)}
				/>
				<Route
					exact
					path="/pets/pet/:idAnimal"
					render={props => (
						<React.Fragment>
							<Navbar />
							<PetProfile />
							<Footer />
						</React.Fragment>
					)}
				/>
				<Route
					exact
					path="/pets/:animalType"
					render={props => (
						<React.Fragment>
							<Navbar />
							<PetSection />
							<Footer />
						</React.Fragment>
					)}
				/>
				<Route
					exact
					path="/products/:productType"
					render={props => (
						<React.Fragment>
							<Navbar />
							<ProductSection />
							<Footer />
						</React.Fragment>
					)}
				/>

				<Route
					exact
					path="/about"
					render={props => (
						<React.Fragment>
							<Navbar />
							<About />
							<Footer />
						</React.Fragment>
					)}
				/>
			</div>
		);
	}
}

export default App;
