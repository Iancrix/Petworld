import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../Containers/Navbar/Navbar.css";

import Sidemenu from "../Sidemenu/Sidemenu";

class Navitem extends Component {
	state = {
		isHovered: false,
	};

	/*
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
	};*/

	handleOver = event => {
		event.stopPropagation();

		this.setState({
			isHovered: true,
		});
	};

	handleExit = event => {
		event.stopPropagation();

		this.setState({
			isHovered: false,
		});
	};

	setExit = () => {
		this.setState({
			isHovered: false,
		});
	};

	render() {
		return (
			<div onMouseOver={this.handleOver} onMouseLeave={this.handleExit}>
				<li
					className={
						"nav-item " + this.props.color + " " + this.props.color + "-h"
					}
				>
					<Link to={"/" + this.props.path} className="nav-block nav-link">
						<div className="nav-title">{this.props.content}</div>
					</Link>
					{this.props.hasSidemenu && !this.props.isMobileResponsive ? (
						<Sidemenu
							nameNavItem={this.props.name}
							isHoveredNI={this.state.isHovered}
							addOnClasses={this.props.color}
							setNIExit={this.setExit}
						/>
					) : (
						""
					)}
				</li>
			</div>
		);
	}
}

export default Navitem;
