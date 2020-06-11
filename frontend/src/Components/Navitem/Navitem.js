import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../Containers/Navbar/Navbar.css";

class Navitem extends Component {
	state = {
		isHovered: false,
	};

	handleHover = async event => {
		if (this.props.hasSidemenu) {
			event.stopPropagation();

			await this.setState(prevState => ({
				isHovered: !prevState.isHovered,
			}));

			this.props.setStyleSidemenu(
				this.props.name,
				this.state.isHovered,
				this.props.name + " " + this.props.name + "-color"
			);
		}
	};

	render() {
		return (
			<Link
				to={"/" + this.props.path}
				className="nav-link"
				onMouseEnter={this.handleHover}
				onMouseLeave={this.handleHover}
			>
				<li
					className={
						"nav-item " + this.props.color + " " + this.props.color + "-h"
					}
				>
					{this.props.content}
				</li>
			</Link>
		);
	}
}

export default Navitem;
