import React, { Component } from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Navbar from "./Containers/Navbar/Navbar";
import AnimatedScenery from "./Containers/AnimatedScenery/AnimatedScenery";
import PetSection from "./Containers/PetSection/PetSection";

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
