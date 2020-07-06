import React, { Component } from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Navbar from "./Containers/Navbar/Navbar";
import AnimatedScenery from "./Containers/AnimatedScenery/AnimatedScenery";
import PetSection from "./Containers/PetSection/PetSection";
import PetProfile from "./Containers/PetProfile/PetProfile";
import Footer from "./Components/Footer/Footer";

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
						</React.Fragment>
					)}
				/>
			</div>
		);
	}
}

export default App;
