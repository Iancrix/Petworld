import React, { Component } from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Navbar from "./Containers/Navbar/Navbar";
import AnimatedScenery from "./Containers/AnimatedScenery/AnimatedScenery";
import ElementGrid from "./Containers/ElementGrid/ElementGrid";

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
						</React.Fragment>
					)}
				/>
				<Route
					exact
					path="/pets"
					render={props => (
						<React.Fragment>
							<Navbar />
							<ElementGrid />
						</React.Fragment>
					)}
				/>
			</div>
		);
	}
}

export default App;
