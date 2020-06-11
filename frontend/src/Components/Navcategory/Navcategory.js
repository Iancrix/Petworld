import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../Containers/Navbar/Navbar.css";

class Navcategory extends Component {
	getImage = () => {
		return {
			backgroundImage: `url(${this.props.image})`,
		};
	};

	render() {
		console.log(this.props.image);
		return (
			<Link to={"/" + this.props.path} className="nav-link mr-sm">
				<li className={"nav-category " + this.props.addOnStyle}>
					<div className="nav-category-img" style={this.getImage()}></div>
					<span className="nav-category-name">{this.props.name}</span>
				</li>
			</Link>
		);
	}
}

export default Navcategory;
