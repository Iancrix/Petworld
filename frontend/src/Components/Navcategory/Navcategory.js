import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../Containers/Navbar/Navbar.css";
import { withRouter } from "react-router-dom";

class Navcategory extends Component {
	getImage = () => {
		return {
			backgroundImage: `url(${this.props.image})`,
		};
	};

	render() {
		return (
			<div className="category mr-sm">
				<Link
					to={`${this.props.path}/`}
					className="cat-link"
					onClick={this.onClick}
				>
					<li className={"nav-category " + this.props.addOnStyle}>
						<div className="nav-category-img" style={this.getImage()}></div>
						<span className="nav-category-name">{this.props.name}</span>
					</li>
				</Link>
			</div>
		);
	}
}

export default withRouter(Navcategory);
